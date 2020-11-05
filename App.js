// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button,} from 'react-native';
import Greeting from './Greeting';
import State from './Counter'
import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name='Counter' />
      <State />
      <Hello />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },

})


