import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.italianpro.app',
  appName: 'ItalianPro',
  webDir: 'dist',
  backgroundColor: '#041917',
  android: { allowMixedContent: false },
  plugins: {
    SplashScreen: { launchShowDuration: 600, backgroundColor: '#041917', showSpinner: false },
    StatusBar: { style: 'DARK', backgroundColor: '#041917', overlaysWebView: false },
  },
};

export default config;
