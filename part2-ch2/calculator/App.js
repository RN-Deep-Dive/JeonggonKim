import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Calculator from './src/Calculator';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
