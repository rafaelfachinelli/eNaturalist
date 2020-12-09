import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Header from '../components/Header/Header';

import imgStatistics from '../images/statistics/statistics.png';

export default function Statistics() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <Text style={styles.titleGreen}>Visualizar Estatísticas</Text>
        <Image style={styles.image} source={imgStatistics}/>

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

  image: {
    width: 320,
    height: 300,
  }
});