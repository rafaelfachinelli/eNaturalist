import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../components/Header/Header';
import Separator from '../components/Separator/Separator';

export default function DonateElectronics() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <View style={styles.center}>
          <Text style={styles.titleGreen}>Doar Eletrônico</Text>

          <TextInput
            placeholder='Nome'
            style={styles.textInput}
            onChangeText={() => {}}
            autoCompleteType='off'
            autoFocus
          />
          <Separator/>
          <TextInput
            placeholder='E-mail'
            style={styles.textInput}
            onChangeText={() => {}}
            autoCompleteType='off'
          />
          <Separator/>
          <TextInput
            placeholder='Whatsapp'
            style={styles.textInput}
            onChangeText={() => {}}
            autoCompleteType='off'
          />
          <Separator/>
          <TextInput
            placeholder='Descrição'
            style={styles.textInputBox}
            onChangeText={() => {}}
            autoCompleteType='off'
            multiline
            numberOfLines={10}
          />
        
          <RectButton 
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Cadastrar doação</Text>
          </RectButton>
        </View>
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

  textInputBox: {
    width: '90%',
    height: 80,
    fontFamily: 'Archivo_400Regular',
    color: '#4F4F4F',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#6FCF97',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    textAlign: "left",
    textAlignVertical: "top",
  },

  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#2F80ED',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: "center",
  },
});