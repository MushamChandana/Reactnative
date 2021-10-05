import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'
import { Avatar } from 'react-native-paper';


const icon = () => {
    return (
        <View><MaterialCommunityIcons name="autorenew" size={23} color="#fff" /></View>
    )
}

const Cash = ({navigation}) => {
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
                <Text style={{ fontSize: 35,padding:10 }}>Cash</Text>
            </View>
        </View>
        <View style={Styles.set}>
                <View style={Styles.set2}>       
                 <Avatar.Icon size={40} icon={icon} style={{ backgroundColor: '#FF9700' }} />
               <Text style={{color:'blue',marginHorizontal:20}}>Set as default payment mode</Text>
             </View>
        </View>
        <Text style={{padding:20,fontSize:15}}>Pay in Cash for your rides.
        Rapido Captain's Phone Will show you the amount to be paid</Text>

       
        </View>

    )
}

export default Cash;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})
