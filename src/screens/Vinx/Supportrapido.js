import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'
import { Avatar } from 'react-native-paper';


const device_height = Dimensions.get(`window`).height - 24



const Supportrapido = ({ navigation }) => {

    return (
        <View style={Styles.container}>

            <View style={styles.silde}>

                <View style={Styles.icon}>

                    <View>
                        <MaterialCommunityIcons name="arrow-left" size={30} />
                    </View>


                </View>
                <View style={Styles.wall}>
                    <Text style={{ fontSize: 35, margin: 10 }}>Support</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior="height"
                style={{ flex: 1 }} >
                <ScrollView style={{ height: device_height }}>
                    <View style={{ padding: 20 }}>
                    <TouchableOpacity
                                onPress={() => navigation.navigate('SearchScreen')}
                            >
                        <View style={styles.box}>
                            <MaterialCommunityIcons name="magnify" size={28}
                                color="#96969C" style={{ marginHorizontal: 20 }} />
                            <Text style={styles.text}>Search issue</Text>

                        </View>
                        </TouchableOpacity>
                        <View style={styles.box2}>

                            <View style={Styles.set}>
                                <View style={Styles.set2}>
                                    <Avatar.Image size={40} source={require('../../assets/question.png')} style={{ backgroundColor: '#000', }} />
                                    <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 16 }}>Having an issue?</Text>
                                </View>
                                <TouchableOpacity
                                onPress={() => navigation.navigate('Help')}
                            >
                                <View style={{ borderWidth: 1, height: 40, width: 100, borderColor: '#E2E2E2', borderRadius: 5, flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ color: '#3588f4', fontSize: 18, alignSelf: 'center' }}>Get Help</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2', marginVertical: 5 }}></View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ticket')}
                            >
                                <Text style={{ alignSelf: 'center', color: '#3588f4', marginVertical: 5, fontSize: 18 }} > View all tickets</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.detalis}>FAQs</Text>
                        <View style={styles.box3}>
                            <View style={styles.row}>
                            <TouchableOpacity
                        onPress={() => navigation.navigate('Safety')}
                    >
                           <View  style={{alignItems:'center',padding:20}}>
                           <Avatar.Image size={64} source={require('../../assets/helmet.jpg')}  
                           />
                             <Text>Safety &</Text> 
                             <Text>Securit</Text>
                               </View>
                               </TouchableOpacity>
                               <TouchableOpacity
                        onPress={() => navigation.navigate('Ride')}
                    >
                               <View  style={{alignItems:'center',padding:20}}>
                           <Avatar.Image size={64} source={require('../../assets/scooter.jpg')}  
                           />
                             <Text>Ride &</Text> 
                             <Text>Billing</Text>
                               </View>
                               </TouchableOpacity>
                               <TouchableOpacity
                        onPress={() => navigation.navigate('Services')}
                    >
                               <View  style={{alignItems:'center',padding:20}}>
                           <Avatar.Image size={64} source={require('../../assets/man.png')}  
                           />
                             <Text>Services</Text>
                               </View>
                               </TouchableOpacity>
                               </View>
                               

                               

                  
                        <View style={styles.row}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Account')}
                    >
                        <View  style={{alignItems:'center',padding:20}}>
                           <Avatar.Image size={64} source={require('../../assets/account.jpg')}  
                           />
                             <Text>Account </Text> 
                             <Text>& App</Text>
                               </View>
                               </TouchableOpacity>
                               <TouchableOpacity
                        onPress={() => navigation.navigate('Referrals')}
                    >
                               <View  style={{alignItems:'center',padding:20}}>
                           <Avatar.Image size={64} source={require('../../assets/hands.png')}  
                           />
                             <Text>Referrals</Text>
                               </View>
                               </TouchableOpacity>
                               <TouchableOpacity
                        onPress={() => navigation.navigate('Faqpayment')}
                    >
                               <View  style={{alignItems:'center',padding:20}}>
                           <Avatar.Image size={64} source={require('../../assets/payment.jpg')}  
                           />
                             <Text>Payment</Text>
                             <Text>& Wallets</Text>

                               </View>
                               </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Powerpass')}
                    >
                    <View  style={{padding:10 ,alignItems:'center'}}>
                           <Avatar.Image size={64} source={require('../../assets/pass.jpg')}  
                           />
                             <Text style> Power</Text> 
                             <Text>Pass</Text>
                               </View>
                               </TouchableOpacity>
                    </View>
                    </View>


                </ScrollView>
            </KeyboardAvoidingView>

        </View>

    )
}

export default Supportrapido;

const styles = StyleSheet.create({

    silde: {
        height: '20%',
        backgroundColor: '#F9D915'

    },
    box: {
        borderWidth: 1,
        height: 45,
        borderColor: '#E2E2E2',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    box2: {
        borderWidth: 1,
        height: 120,
        borderColor: '#E2E2E2',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 30

    },
    box3: {
        borderWidth: 1,
        height: 420,
        borderColor: '#E2E2E2',
        backgroundColor: '#fff',
        borderRadius: 10,
       

    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around'

    },

    text: {
        color: '#96969C',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    detalis: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        color: '#000',

    },




})