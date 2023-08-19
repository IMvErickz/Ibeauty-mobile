

import { NativeBaseProvider, StatusBar } from 'native-base'
import { Routes } from './src/routes/app';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthContextProvider>

        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <Routes />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}