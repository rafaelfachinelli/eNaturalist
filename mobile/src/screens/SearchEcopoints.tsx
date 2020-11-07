import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';

import Ecopoint from '../components/Ecopoint/Ecopoint';
import Header from '../components/Header/Header';
import Separator from '../components/Separator/Separator';

export default function SearchEcopoints() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <View style={styles.center}>
        <Text style={styles.titleGreen}>Selecione uma cidade</Text>
        <TextInput
          placeholder='Escolha uma cidade'
          style={styles.textInput}
          onChangeText={() => {}}
          autoCompleteType='off'
          autoFocus
        />
        <Text style={styles.titleGreen}>Ecopontos disponíveis</Text>

        <Ecopoint/>
        <Separator/>
        <Ecopoint/>
        <Separator/>
        <Ecopoint/>

        <Text style={styles.textQuantity}>3 ecopontos encontrados</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },

  center: {
    alignItems: 'center',
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

  textJustify: {
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: "justify",
    marginVertical: 5,
  },

  textQuantity: {
    fontFamily: 'Archivo_400Regular',
    color: '#828282',
    fontSize: 12,
    textAlign: "center",
    marginVertical: 5,
  },

  textInput: {
    width: '90%',
    height: 40,
    fontFamily: 'Archivo_400Regular',
    color: '#4F4F4F',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#6FCF97',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});