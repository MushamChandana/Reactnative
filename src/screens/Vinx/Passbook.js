import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const Passbook = ({navigation}) => {
    return (
        <View style={Styles.container}>

        <View style={Styles.silde}>

            <View style={Styles.icon}>

                <View>
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                </View>
                <View style={Styles.icon2}>
                    <View>
                        <MaterialCommunityIcons name="help-circle" size={20} />
                    </View>
                    <TouchableOpacity
                            onPress={() => navigation.navigate('Support')}
                        >
                    <View>
                        <Text style={Styles.text}>Support</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={Styles.wall}>
                <Text style={{ fontSize: 30 }}>Passbook</Text>
            </View>
        </View>
        <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
        <Image source={require('../../assets/passbook.jpg')} style={{height:"20%",width:'40%',alignSelf:'center'}}/>
        </View>
        </View>

    )
}

export default Passbook;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})
