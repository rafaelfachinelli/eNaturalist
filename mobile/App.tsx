import React from 'react';

import { useFonts } from 'expo-font';
import { Archivo_400Regular, Archivo_600SemiBold, Archivo_700Bold } from '@expo-google-fonts/archivo'

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
  });

  if(!fontsLoaded) {
    //Criar página de carregamento.
    return null;
  }

  return (
    <Routes />
  );
}
