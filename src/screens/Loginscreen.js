import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Loginscreen extends Component {
    render(){
        return(
            <SafeAreaView>
            <View>
                <Text>login screen</Text>
            </View>
            </SafeAreaView>
        );
    }
}