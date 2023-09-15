import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header'
import { getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper'

const StatusBarHeight = getStatusBarHeight(true);


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
