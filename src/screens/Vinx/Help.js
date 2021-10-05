import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const Help = ({navigation}) => {
    return (
        <View style={Styles.container}>

        <View style={styles.silde}>

            <View style={Styles.icon}>

                <View>
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                </View>
                <View style={Styles.icon2}>
                <TouchableOpacity
                            onPress={() => navigation.navigate('Ticket')}
                        >
                <View>
                        <Text style={Styles.text}>Tickets</Text>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <MaterialCommunityIcons name="ticket-confirmation" size={20}  style={{marginHorizontal:5}}/>
                    </View>
                   
                </View>

            </View>
            <View style={Styles.wall}>
                <Text style={{ fontSize: 30 }}>Help</Text>
            </View>
        </View>

        <View style={{padding:10,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}}>Safety & Security</Text>
            <Text style={{fontSize:18,marginVertical:15}}>Billing/Ride Related Issues</Text>
            <Text style={{fontSize:18,marginVertical:15}}>Account & App</Text>
            <Text style={{fontSize:18,marginVertical:15}}>Referrals</Text>
            <Text style={{fontSize:18,marginVertical:15}}> Payment & Wallets</Text>
            <Text style={{fontSize:18,marginVertical:15}}> Power Pass</Text>
            <Text style={{fontSize:18,marginVertical:15}}> Other Issues</Text>

        </View>
      
     
        </View>

    )
}

export default Help;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
  
})
