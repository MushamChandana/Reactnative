import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Loginscreen extends Component {
    render(){
        return(
            <SafeAreaView>
            <View>
               <View>
                   <Image source={require('../assets/carrots.jpeg')}
                   style={{width:100,height:100}}/>
               </View>
            </View>
            </SafeAreaView>
        );
    }
}