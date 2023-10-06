import React from 'react';
import {View,Text, Button} from 'react-native';

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
        <Button
          title='C스크린으로 이동하기'
          onPress={()=> {
            this.props.navigation.navigate('NestedNavigator', {screen:'ScreenC'});
          }} 
        />
      </View>

    )
  }
}