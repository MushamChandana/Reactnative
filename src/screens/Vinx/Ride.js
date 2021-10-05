import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const Ride = ({ navigation }) => {

    const list = [
        {
            data: 'How can I check the fare for a ride?'
        },
        {
            data: 'How can I check the fare breakup for my ride?  '
        },
        {
            data: 'How do i apply a coupon code for a ride? '
        },
        {
            data: 'Where can I find my captain details? '
        },
        {
            data: 'How can I contact my captain? '
        },
        {
            data: "How do ETA's work? "
        },
        {
            data: 'How do i use PIN to start my ride? '
        },
        {
            data: 'How can I tip my captain? '
        },
        {
            data: 'How to receive invoice in my email? '
        },
        {
            data: 'I want to understand the charges in the invoice? '
        },
    ]
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
                            <MaterialCommunityIcons name="ticket-confirmation" size={20} style={{ marginHorizontal: 5 }} />
                        </View>

                    </View>

                </View>
                <View style={Styles.wall}>
                    <Text style={{ fontSize: 35,padding:20}}>FAQs</Text>
                </View>
            </View>

            <View style={{ padding: 10, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, marginVertical: 10 ,fontWeight:'bold'}}>Ride & Billing</Text>
                {list.map((item, index) => {
                    return (
                        <View  key={index}>
                        <Text style={{ fontSize: 16, marginVertical: 10 }}> {item.data}</Text>

                        </View>
                    )
                })
                }
            </View>

        </View>

    )
}

export default Ride;

const styles = StyleSheet.create({

    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})
