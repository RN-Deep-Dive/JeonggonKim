import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native'

const InputBox = (props) => {
    return (
        <View style= {{flexDirection:"row"}}>
            <TextInput value={props.value} onChangeText={props.onChangeText} style= {{borderBottomWidth:1, width:100}} placeholder={props.placeholder}/>
            <Button title="초기화" onPress={props.onReset}/>
        </View>
    )
}

//커스텀훅 규칙 : use라는 단어로 시작해야함.
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const resetValue = () => setValue(initialValue);

    return {
        value,
        setValue,
        resetValue,
    }
} 

const CustomHook = () => {
    const {value :name , setValue: setName, resetValue: resetName} = useInput("");
    const {value :age , setValue: setAge, resetValue: resetAge} = useInput("");
    const {value :city , setValue: setCity, resetValue: resetCity} = useInput("");


    // const setName = (v) => void;
    return (
        <View>
            <InputBox
                value={name}
                onChangeText={setName}
                placeholder="이름을 입력해주세요"
                onReset={resetName}
            />
            <InputBox
                value={age}
                onChangeText={setAge}
                placeholder="나이를 입력해주세요"
                onReset={resetAge}
            />
            <InputBox
                value={city}
                onChangeText={setCity}
                placeholder="사는 곳을 입력해주세요"
                onReset={resetCity}
            />

            {/* <View style= {{flexDirection:"row"}}>
                <TextInput value={name} onChangeText={setName} style= {{borderBottomWidth:1, width:100}} placeholder="이름을 입력해주세요"/>
                <Button title="초기화" onPress={()=> setName("")}/>
            </View>
            <View style= {{flexDirection:"row"}}>
                <TextInput value={age} onChangeText={setAge} style= {{borderBottomWidth:1, width:100}} placeholder="나이를 입력해주세요"/>
                <Button title="초기화" onPress={()=> setAge("")}/>
            </View>
            <View style= {{flexDirection:"row"}}>
                <TextInput value={city} onChangeText={setCity} style= {{borderBottomWidth:1, width:100}} placeholder="사는 곳을 입력해주세요"/>
                <Button title="초기화" onPress={()=> setCity("")}/>
            </View> */}
        </View>
    )
}

export default CustomHook;