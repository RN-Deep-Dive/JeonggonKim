import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Header from './src/Header'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';

const statusBarHeight = getStatusBarHeight(true);


export default function App() {

  const onPressArrow = () => {;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right','left']} style={styles.container} >
        <Header />
        
        <Margin height={10}/>      
        
        <Profile 
          uri ={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}        
        />

        <Margin height = {15}/>
        
        <Division />

        <Margin height={12}/>

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow = {onPressArrow}
        />

        <FriendList
          data={friendProfiles}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    paddingHorizontal: 10,
  },
});

