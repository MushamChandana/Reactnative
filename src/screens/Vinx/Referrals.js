import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const Referrals = ({ navigation }) => {

    const list = [
        {
            data: 'How do I refer a person to Rapido?'
        },
        {
            data: 'How do I view the status of my referrals?'
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
                Referrals</Text>
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

export default Referrals;

const styles = StyleSheet.create({

    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
})
