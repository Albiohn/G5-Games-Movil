import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'moviapp',
  webDir: 'www',
  android: {
    path: 'android'  // Esta línea especifica la carpeta 'android' como el directorio de tu proyecto Android
  }
};

export default config;
