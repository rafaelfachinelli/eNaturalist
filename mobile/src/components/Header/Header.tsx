import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';

import Logo from '../../images/Logo.png';
import icoMenu from '../../images/menu.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menu}
        onPress={() => {}}
      >
        <Image style={styles.icoMenu} source={icoMenu}/>
      </TouchableOpacity>
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
    width: 30,
    height: 30,
  },
});