import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Header from '../components/Header/Header';

export default function Statistics() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <Text style={styles.titleGreen}>Visualizar Estatísticas</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 24,
  },

  titleGreen: {
    fontFamily: 'Archivo_700Bold',
    color: '#219653',
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
  },

  titleWhite: {
    fontFamily: 'Archivo_700Bold',
    color: '#e0e0e0',
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
});