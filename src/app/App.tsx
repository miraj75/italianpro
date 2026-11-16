import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { SplashScreen as CapSplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { RouterProvider, matchPath, useRouter } from './router';
import { AppShell } from './AppShell';
import { ProgressProvider } from '../state/ProgressContext';
import { SplashScreen } from '../components/SplashScreen';
import { stopSpeaking } from '../lib/speech';
import { HomeScreen } from '../screens/HomeScreen';
import { CoursesScreen, LevelScreen } from '../screens/CoursesScreen';
import { LessonScreen } from '../screens/LessonScreen';
import { ChallengeScreen } from '../screens/ChallengeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AboutScreen, SavedScreen } from '../screens/InfoScreens';
import { PracticeHub } from '../screens/practice/PracticeHub';
import { VocabularyScreen } from '../screens/practice/VocabularyScreen';
import { VerbsScreen } from '../screens/practice/VerbsScreen';
import { SurvivalScreen } from '../screens/practice/SurvivalScreen';
import { MistakesScreen } from '../screens/practice/MistakesScreen';
import { WordBankScreen } from '../screens/practice/WordBankScreen';
import { PhrasesScreen, SentencesScreen } from '../screens/practice/SentencesScreen';
import { PuzzleScreen } from '../screens/practice/PuzzleScreen';
import { GrammarHubScreen, GrammarTopicScreen } from '../screens/practice/GrammarScreens';
import { StoriesScreen, StoryReaderScreen } from '../screens/practice/StoriesScreen';
import { ListeningScreen } from '../screens/practice/ListeningScreen';
import { ReadingScreen } from '../screens/practice/ReadingScreen';
import { WritingScreen } from '../screens/practice/WritingScreen';
import { SpeakingScreen } from '../screens/practice/SpeakingScreen';
import { AssessmentScreen } from '../screens/AssessmentScreen';
import { LEVEL_ORDER } from '../content/courses';
import type { LevelId } from '../content/types';

function Screen() {
  const { route } = useRouter();
  const path = route.path;

  if (path === '/splash') {
    return <SplashScreen holdOpen />;
  }

  const lesson = matchPath('/lesson/:id', path);
  if (lesson) {
    return (
      <AppShell hideNav>
        <LessonScreen key={lesson.id} lessonId={lesson.id!} />
      </AppShell>
    );
  }

  const level = matchPath('/level/:id', path);
  if (level && (LEVEL_ORDER as string[]).includes(level.id!)) {
    return (
      <AppShell>
        <LevelScreen key={level.id} id={level.id as LevelId} />
      </AppShell>
    );
  }
  const grammar = matchPath('/grammar/:id', path);
  if (grammar) {
    return (
      <AppShell>
        <GrammarTopicScreen key={grammar.id} id={grammar.id!} />
      </AppShell>
    );
  }
  const story = matchPath('/practice/stories/:id', path);
  if (story) {
    return (
      <AppShell>
        <StoryReaderScreen key={story.id} storyId={story.id!} />
      </AppShell>
    );
  }
  const assessment = matchPath('/assessment/:level/:id', path);
  if (assessment && (LEVEL_ORDER as string[]).includes(assessment.level!)) {
    return (
      <AppShell>
        <AssessmentScreen key={`${assessment.level}-${assessment.id}`} level={assessment.level as LevelId} id={assessment.id!} />
      </AppShell>
    );
  }

  const screens: Record<string, JSX.Element> = {
    '/': <HomeScreen />,
    '/courses': <CoursesScreen />,
    '/practice': <PracticeHub />,
    '/practice/vocabulary': <VocabularyScreen />,
    '/practice/verbs': <VerbsScreen />,
    '/practice/survival': <SurvivalScreen />,
    '/practice/mistakes': <MistakesScreen />,
    '/practice/grammar': <GrammarHubScreen />,
    '/practice/words': <WordBankScreen />,
    '/practice/sentences': <SentencesScreen />,
    '/practice/phrases': <PhrasesScreen />,
    '/practice/puzzle': <PuzzleScreen />,
    '/practice/stories': <StoriesScreen />,
    '/practice/listening': <ListeningScreen />,
    '/practice/reading': <ReadingScreen />,
    '/practice/writing': <WritingScreen />,
    '/practice/speaking': <SpeakingScreen />,
    '/challenge': <ChallengeScreen />,
    '/profile': <ProfileScreen />,
    '/saved': <SavedScreen />,
    '/about': <AboutScreen />,
  };
  return <AppShell>{screens[path] ?? <HomeScreen />}</AppShell>;
}

/** Android native lifecycle: hardware back navigation, status bar theming, and speech cleanup on background. */
function useAndroidNativeLifecycle() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    void StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
    void StatusBar.setBackgroundColor({ color: '#041917' }).catch(() => {});
    void CapSplashScreen.hide().catch(() => {});

    const backHandle = CapApp.addListener('backButton', ({ canGoBack }) => {
      void stopSpeaking();
      const currentPath = window.location.hash.replace(/^#/, '') || '/';
      if (currentPath === '/') {
        void CapApp.exitApp();
      } else if (canGoBack && window.history.length > 1) {
        window.history.back();
      } else {
        window.location.hash = '/';
      }
    });

    const stateHandle = CapApp.addListener('appStateChange', ({ isActive }) => {
      if (!isActive) {
        void stopSpeaking();
      }
    });

    return () => {
      void backHandle.then((h) => h.remove());
      void stateHandle.then((h) => h.remove());
    };
  }, []);
}

export function App() {
  useAndroidNativeLifecycle();

  const isTestEnv = typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent);
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const forceSplashHold = searchParams?.get('splash') === '1';
  const skipSplash = isTestEnv || searchParams?.get('nosplash') === '1';

  const [showSplash, setShowSplash] = useState(() => !skipSplash);

  return (
    <ProgressProvider>
      <RouterProvider>
        {showSplash && (
          <SplashScreen
            holdOpen={forceSplashHold}
            onFinish={() => setShowSplash(false)}
          />
        )}
        <Screen />
      </RouterProvider>
    </ProgressProvider>
  );
}
