import React from 'react';
import { View, Text } from 'react-native';

const Multi = (props) => {
    return (
        <View>
            <Text>hai my name is {props.name} HELLO hello hello</Text>
        </View>
    );
}
const Propname = () => {
    return (
        <View>
            <Text> hai hello welcome to new tech</Text>
            <Multi name="sudha" />
            <Multi name="chandu" />
            <Multi name="siri" />
            <Multi name="gouthami" />
            <Multi name="ele" />

        </View>
    );
}
 export default Propname;