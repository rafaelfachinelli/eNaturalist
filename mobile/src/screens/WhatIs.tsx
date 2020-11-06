import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WhatIs() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O que é e-Lixo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Archivo_600SemiBold',
    color: '#4f4f4f',
  },
});