import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import {View,Text, Button} from 'react-native';
import {ScreenC} from './ScreenC';

const Stack = createNativeStackNavigator();

export class NestedStackNavigation extends Component{
  render(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="ScreenC" component={ScreenC}/>
      </Stack.Navigator>
    )
  }
}




export class ScreenA extends React.Component {
  render(){
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>ScreenA</Text>
        <Button
          title='B스크린으로 이동하기'
          onPress={()=> {
            this.props.navigation.navigate('ScreenB', {value:'fromA'});
          }} 
        />
      </View>

    )
  }
}