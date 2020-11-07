import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import Logo from '../../images/Logo.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <RectButton
        style={styles.menu}
        onPress={() => {}}
      >
        <Feather name='menu' size={30} color='#333'/>
      </RectButton>
      <Image style={styles.logo} source={Logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 4,
    borderColor: '#219653',
  },

  logo: {
    width: '80%',
    resizeMode: "contain",
  },

  menu: {
    width: 50,
    height: 50,
    backgroundColor: '#219653',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icoMenu: {
    width: 25,
    height: 25,
  },
});