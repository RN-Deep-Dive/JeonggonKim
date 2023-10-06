import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import {View,Text, Button} from 'react-native';
import {ScreenC} from './ScreenC';
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';

const Stack = createNativeStackNavigator();

export class NestedStackNavigation extends Component{
  render(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA}/>
        {/* <Stack.Screen name="ScreenB" component={ScreenB}/> */}
        <Stack.Screen name="ScreenC" component={ScreenC}/>
      </Stack.Navigator>
    )
  }
}

