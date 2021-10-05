import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { Avatar } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const icon = () => {
    return (
        <View><MaterialCommunityIcons name="cellphone" size={23} color="#fff" /></View>
    )
}

const icon2 = () => {
    return (
        <View><MaterialCommunityIcons name="autorenew" size={23} color="#fff" /></View>
    )
}

const Gpay = ({navigation}) => {
    return (
        <View style={Styles.container}>

            <View style={styles.silde}>

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
                    <Text style={{ fontSize: 35, padding: 10 }}>QR Pay</Text>
                </View>
            </View>

            <View style={Styles.profile}>

                <View >
                    <Avatar.Icon size={40} icon={icon} style={{ backgroundColor: '#56a55b' }} />
                </View>
                <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                    <Text style={{ color: '#828282', fontSize: 15 }}> PhoneNumber</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>9505955908</Text>
                </View>
            </View >
            <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                </View>
            <View style={Styles.set}>
                <View style={Styles.set2}>
                    <Avatar.Icon size={40} icon={icon2} style={{ backgroundColor: '#9E9E9E' }} />
                    <Text style={{ color: '#A8A8A8', marginHorizontal: 20 }}>Marked as default</Text>
                </View>
                <View style={{borderWidth:1, height:20,width:70,backgroundColor:"#c8def7",borderColor:'#c8def7',borderRadius:5}}>
                    <Text style={{ color: '#A8A8A8', marginHorizontal: 10 ,fontSize:12,alignSelf:'center'}}>DEFAULT</Text>
                </View>
            </View>



        </View>

    )
}

export default Gpay

const styles = StyleSheet.create({

    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})

