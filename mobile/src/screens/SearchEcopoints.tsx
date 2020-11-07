import React from 'react';
import { View, Text } from 'react-native';

import Ecopoint from '../components/Ecopoint/Ecopoint';
import Header from '../components/Header/Header';

export default function SearchEcopoints() {
  return (
    <View>
      <Header/>
      <Text>Essa aqui será a tela de busca dos ecopontos.</Text>
      <Ecopoint/>
    </View>
  );
}