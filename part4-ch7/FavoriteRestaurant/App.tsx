/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Icon } from './src/components/Icons';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <RootNavigation/> 
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
