import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();
// console.log(bottomSpace) 0인경우 차이 없음.

export default (props) => {
  /*
    Case 1. 삼항연산자
  */
  // return props.isOpened ? (
  //   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:bottomSpace}}>
  //     {props.data.map((item, index)=>(
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13}/>
  //       </View>

  //     ))}
  //   </ScrollView>
  // ) : null;

  /*
    Case 2. if문으로 먼저 예외처리
  */
  // if (!props.isOpened) return null;
  // return (
  //   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:bottomSpace}}>
  //     {props.data.map((item, index)=>(
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13}/>
  //       </View>

  //     ))}
  //   </ScrollView>
  // )

  /*
    Case 3. && 이용
  */
  return props.isOpened && (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:bottomSpace}}>
      {props.data.map((item, index)=>(
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13}/>
        </View>

      ))}
    </ScrollView>
  )
}