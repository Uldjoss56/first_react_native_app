import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={ styles.container}>
      <Text>App</Text>
      <StatusBar style="auto" />
      <Link href="./screens/details-screen"> Go to Detail</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})