import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const Account = ({ navigation }) => {

    const list = [
        {
            data: 'How can I book a ride?'
        },
        {
            data: 'How can I schedule a ride in advance?  '
        },
        {
            data: 'How do i turn off the Notifications? '
        },
        {
            data: 'How do i turn on/off picture-in-picture feature? '
        },
        {
            data: 'How can I update my mobile number? '
        },
        {
            data: "How can I update my email ID? "
        },
        {
            data: 'How do i use PIN to start my ride? '
        },
        {
            data: 'How can I update the language on my app? '
        },
        {
            data: 'How to update my work/home or favourite locations? '
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
                <Text style={{ fontSize: 18, marginVertical: 10 ,fontWeight:'bold'}}>
                    Account & App</Text>
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

export default Account;

const styles = StyleSheet.create({

    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})
