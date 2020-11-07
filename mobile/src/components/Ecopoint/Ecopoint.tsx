import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import icoPinEcopoint from '../../images/ico_pinEcopoint.png';

export default function Ecopoint() {
  return (
    <View style={styles.containerEcopoint}>
      <View style={styles.icon}>
        <Image source={icoPinEcopoint}/>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.name}>01 - Centro</Text>
        <View style={styles.button}>
          <RectButton
            style={styles.button}
            accessibilityLabel='Visualizar detalhes do ecoponto.'
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Visualizar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#27AE60',
  },

  containerEcopoint: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
  },

  containerInfo: {
    width: '80%',
  },

  name: {
    height: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 2,
    borderTopRightRadius: 10,
    backgroundColor: '#219653',
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
  },

  button: {
    height: '50%',
    backgroundColor: '#2F80ED',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    
  },

  buttonText: {
    fontFamily: 'Archivo_400Regular',
    color: '#e0e0e0',
    fontSize: 14,
  },
});