import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.webApp',
  appName: 'web-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
