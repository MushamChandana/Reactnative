import React from 'react';
import { Text, View } from 'react-native';

const getFullName = (firstname, secondname, thirdname) => {
    return firstname + " " + secondname + " " + thirdname;
}


function Jsxexample() {
    const name = "manu"
    return (
        <View>
            <Text> hai this is {name} i am from hyd </Text>
            <Text>  hello we are {getFullName("sudha", "chandu", " siri")}</Text>
        </View>
    );
}
export default Jsxexample;