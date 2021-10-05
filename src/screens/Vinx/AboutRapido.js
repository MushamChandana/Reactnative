import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const AboutRapido = ({navigation}) => {
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
                <Text style={{ fontSize: 30 }}>About</Text>
            </View>
        </View>

        <View style={{padding:20,marginHorizontal:10}}>
            <Text style={{fontSize:16,marginVertical:10}}>Privacy Policy</Text>
            <Text style={{fontSize:16,marginVertical:20}}>Terms And Conditions</Text>
            <Text style={{fontSize:16,marginVertical:20}}>Join the team</Text>
            <Text style={{fontSize:16,marginVertical:20}}>Blog</Text>

            <Text style={{fontSize:16,marginVertical:20}}>Software Licenses</Text>

        </View>
        <View style={styles.version}>
            <Text style={styles.version2}>Version: 5.8.4</Text>
        </View>
     
        </View>

    )
}

export default AboutRapido;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
    version:{
        flex:1,
        justifyContent:'flex-end',
        marginVertical:10

    },

    version2:{
        alignSelf:'center',
        fontSize:16
    }
})
