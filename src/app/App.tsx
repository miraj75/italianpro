import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { RouterProvider, matchPath, useRouter } from './router';
import { AppShell } from './AppShell';
import { ProgressProvider } from '../state/ProgressContext';
import { HomeScreen } from '../screens/HomeScreen';
import { CoursesScreen } from '../screens/CoursesScreen';
import { LessonScreen } from '../screens/LessonScreen';
import { ChallengeScreen } from '../screens/ChallengeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AboutScreen, SavedScreen } from '../screens/InfoScreens';
import { PracticeHub } from '../screens/practice/PracticeHub';
import { VocabularyScreen } from '../screens/practice/VocabularyScreen';
import { VerbsScreen } from '../screens/practice/VerbsScreen';
import { SurvivalScreen } from '../screens/practice/SurvivalScreen';
import { MistakesScreen } from '../screens/practice/MistakesScreen';
import { LessonIndexScreen } from '../screens/practice/LessonIndexScreen';

function Screen() {
  const { route } = useRouter();
  const path = route.path;

  const lesson = matchPath('/lesson/:id', path);
  if (lesson) {
    return (
      <AppShell hideNav>
        <LessonScreen key={lesson.id} lessonId={lesson.id!} />
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
    '/practice/grammar': <LessonIndexScreen mode="grammar" />,
    '/practice/listening': <LessonIndexScreen mode="listening" />,
    '/challenge': <ChallengeScreen />,
    '/profile': <ProfileScreen />,
    '/saved': <SavedScreen />,
    '/about': <AboutScreen />,
  };
  return <AppShell>{screens[path] ?? <HomeScreen />}</AppShell>;
}

/** Android hardware back: go back in history, exit from the home screen. */
function useAndroidBack() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    const handle = CapApp.addListener('backButton', () => {
      const atHome = (window.location.hash.replace(/^#/, '') || '/') === '/';
      if (atHome) void CapApp.exitApp();
      else window.history.back();
    });
    return () => {
      void handle.then((h) => h.remove());
    };
  }, []);
}

export function App() {
  useAndroidBack();
  return (
    <ProgressProvider>
      <RouterProvider>
        <Screen />
      </RouterProvider>
    </ProgressProvider>
  );
}
