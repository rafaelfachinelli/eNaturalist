import React from 'react';

import { useFonts } from 'expo-font';
import { Archivo_600SemiBold } from '@expo-google-fonts/archivo'

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Archivo_600SemiBold,
  });

  if(!fontsLoaded) {
    //Criar página de carregamento.
    return null;
  }

  return (
    <Routes />
  );
}
