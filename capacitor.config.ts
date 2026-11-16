import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.italianpro.app',
  appName: 'ItalianPro',
  webDir: 'dist',
  backgroundColor: '#071522',
  android: { allowMixedContent: false },
  plugins: {
    SplashScreen: { launchShowDuration: 600, backgroundColor: '#071522', showSpinner: false },
    StatusBar: { style: 'DARK', backgroundColor: '#071522', overlaysWebView: false },
  },
};

export default config;
