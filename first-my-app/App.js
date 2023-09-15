import { StatusBar } from 'expo-status-bar';
import { Switch, Button, TextInput, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

const Header = (props) => {
  console.log("props",props)
  return <Text>{props.title}</Text>;
}
const MyProfile=() => {
  return <Text> MyProfile</Text>;
}
const Division=() => {
  return <Text> Division</Text>;
}
const FriendSection=() => {
  return <Text> FriendSection</Text>;
}
const Profile = (props) => {
  return (
    <Text>{props.name}</Text>
  )
}
const FriendList=() => {
  return (
  <View> 
    <Profile name="민호"/>
    <Profile name="ㅁㅁ"/>
    <Profile name="ㅋㅋ"/>
    <Profile name="정곤"/>
    <Profile name="예린"/>
  </View>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile/>
      <Division/>
      <FriendSection/>
      <FriendList/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
