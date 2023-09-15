  import React from "react";
  import { Image, StyleSheet, View, Text } from "react-native";

  /**
   * Header
   * MyProfile
   * Division
   * FriendSection
   * FriendList
   */

  const Header = (props) => {
    return <Text>{props.title}</Text>;
  }
  const MyProfile = () => {
    return (
    <Profile 
      name="정곤"
      uri= "https://isplus.com/data/isp/image/2023/03/09/isp20230309000324.600x.8.jpg" 
      profileSize={40}
    />  
  )
  }
  const Division = () => {
    return <Text>Division</Text>;
  }
  const FriendSection = () => {
    return <Text> FriendSection</Text>;
  }
  const FriendList = () => {
    return (
      <View>
        <Profile 
          name="민경"
          uri= "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/09/18/1e586277-48ba-4e8a-9b98-d8cdbe075d86.jpg" 
          profileSize={30}
        />
        <Profile 
          name="한솔"
          uri= "https://i.namu.wiki/i/vPl_i1cUDFiiaN0L-UfORDLb-_XyBnETXuoTtem8OE7qyEzxPBL4A43Da80d0cr3bkuxce5lS6QQwr2-VTqYEg.webp" 
          profileSize={30}
        />
        <Profile 
          name="세원"
          uri= "https://img.sbs.co.kr/newsnet/etv/upload/2020/10/28/30000654805_1280.jpg" 
          profileSize={30}
        />
        <Profile 
          name="환희"
          uri= "https://thumb.mtstarnews.com/06/2023/05/2023052417255985870_1.jpg/dims/optimize" 
          profileSize={30}
        />
    
      </View>
    )}
  // const Profile = (props) => {
  //   return (
  //     <View style={{flexDirection: "row"}}>
  //       <Image 
  //       source={{
  //         uri: props.uri
  //       }} 
  //         style={{
  //           width: props.profileSize, 
  //           height: props.profileSize,
  //         }}
  //       />
  //       <Text>{props.name}</Text>
  //     </View>

  //   )
  // }

  class Profile extends React.Component {
    render() {
      return (
        <View style={{flexDirection: "row"}}>
          <Image 
          source={{
            uri: this.props.uri
          }} 
            style={{
              width: this.props.profileSize, 
              height: this.props.profileSize,
            }}
          />
          <Text>{this.props.name}</Text>
        </View>
      )
    }
  }

  export default function App() {
    return <View style={styles.container}>
      <Header title="친구"/>
      <MyProfile/>
      <Division/>
      <FriendSection/>
      <FriendList/>
    </View>;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  }); 