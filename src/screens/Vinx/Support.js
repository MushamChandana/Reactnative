import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const Support = ({navigation}) => {
    return (
        <View style={Styles.container}>

        <View style={styles.silde}>

            <View style={Styles.icon}>

                <View>
                <TouchableOpacity
                           onPress={() => navigation.goBack()}
                        >
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                    </TouchableOpacity>
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
                <Text style={{ fontSize: 30 }}>Support</Text>
            </View>
        </View>

        <View style={{padding:20,marginHorizontal:10}}>
            <Text style={{fontSize:16,marginVertical:10}}>Payment & Wallets</Text>
            <Text style={{fontSize:16,marginVertical:10}}>Rapiod Coins</Text>
        </View>
     
        </View>

    )
}

export default Support;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})
