import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import React from 'react'

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ankur Raj</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 60,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 36
    }
  });