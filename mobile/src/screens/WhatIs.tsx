import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header/Header';

export default function WhatIs() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Text style={styles.title}>O que é e-Lixo!</Text>
      <View style={styles.backgroundGreen}>
        <Text 
          style={styles.text}
        >
          Um eletrônico com defeito ou que não possui mais utilidade pode ser 
          considerado um e-lixo. 
          Praticamente tudo que tenha um PLUG DE TOMADA ou BATERIA.
        </Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator horizontal>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam maiores voluptates, voluptatum rerum possimus unde nobis dolores expedita quo sapiente molestias dignissimos! Impedit pariatur molestiae, odit eveniet exercitationem maxime quisquam.</Text>
      </ScrollView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#219653',
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
  },

  text: {
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: "justify",
  },

  backgroundGreen: {
    backgroundColor: '#219653',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
  
});