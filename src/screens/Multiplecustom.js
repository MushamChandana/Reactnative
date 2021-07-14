import React from 'react';
import { View, Text } from 'react-native';
const Multiplecustom = () => {
    return (
        <View>
            <Text>this is a Multiplecustom component hello</Text>
        </View>
    );
}

const Custom = () => {
    return(
        <View>
            <Text>
                welcome to the wolrd HEARTILY WELCOME
            </Text>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
            <Multiplecustom/>
        </View>
    );
}
export default Custom;