import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Separator() {
  return (
    <View style={styles.space}></View>
  );
}

const styles = StyleSheet.create({
  space: {
    marginVertical: 5,
  },
});