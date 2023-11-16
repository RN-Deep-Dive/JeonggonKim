import React from 'react';
import {View} from 'react-native';
import { Header } from '../components/Header/Header';
import { Icon } from '../components/Icons';
import MapView from 'react-native-maps';

export const MainScreen:React.FC = () =>{
  // latitude : 37.562562 longitude : 126.980556
  return (
  <View style={{flex:1}}>
    <Header>
      <Header.Title title="Main"/>
    </Header>
    <MapView 
    style={{flex:1}}
    region={{
      latitude : 37.560214,
      longitude : 126.9775521,
      latitudeDelta : 0.015,
      longitudeDelta : 0.0121,
    }} />
  </View>
  )
}