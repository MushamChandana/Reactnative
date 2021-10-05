import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import Styles from './Styles'

const device_height = Dimensions.get(`window`).height - 24



const icon = () => {
    return (
        <View><MaterialCommunityIcons name="wallet" size={23} color="#D5BD1A" /></View>
    )
}

const icon2 = () => {
    return (
        <View><MaterialCommunityIcons name="qrcode-scan" size={23} color="#D5BD1A" /></View>
    )
}

const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.silde}>

                <View style={styles.icon}>

                    <View>
                        <MaterialCommunityIcons name="arrow-left" size={30} />
                    </View>
                    <View style={styles.icon2}>

                        <View>
                            <MaterialCommunityIcons name="help-circle" size={20} />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Support')}
                        >
                            <View>
                                <Text style={styles.text}>Support</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.wall}>
                    <Text style={{ fontSize: 30 }}>Payment</Text>
                </View>
            </View>

            <KeyboardAvoidingView behavior="height"
                style={{ flex: 1 }} >
                <ScrollView style={{ height: device_height }}>
                    <View>
                        <Text style={styles.detalis}>personal Wallet</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Wallet')}
                    >
                        <View style={Styles.set}>
                            <View style={Styles.set2}>
                                <Avatar.Icon size={40} icon={icon} style={{ backgroundColor: '#000', }} />
                                <Text style={Styles.set3} >Rapido Wallet </Text>
                            </View>
                            <View>
                                <Text style={Styles.set4}>₹0.0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Image size={40} source={require('../../assets/paytm2.jpeg')} style={{ backgroundColor: '#fff', }} />
                            <Text style={Styles.set3} >Paytm </Text>
                        </View>
                        <View style={Styles.set5}>
                            <Text style={Styles.set6}>LINK</Text>
                        </View>
                    </View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Image size={40} source={require('../../assets/Amazonpay.jpg')} style={{ backgroundColor: '#fff', }} />
                            <Text style={Styles.set3} >Amazon Pay </Text>
                        </View>
                        <View style={Styles.set5}>
                            <Text style={Styles.set6}>LINK</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.detalis}>Pay Later</Text>
                    </View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Image size={40} source={require('../../assets/LazyPay3.jpg')}
                                style={{ backgroundColor: '#E74C5B' }} />
                            <Text style={Styles.set3} >Lazy Pay </Text>
                        </View>
                        <View style={Styles.set5}>
                            <Text style={Styles.set6}>LINK</Text>
                        </View>
                    </View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Image size={40} source={require('../../assets/simpl.jpg')} style={{ backgroundColor: '#01D1C1', }} />
                            <Text style={Styles.set3} >Simpl </Text>
                        </View>
                        <View style={Styles.set5}>
                            <Text style={Styles.set6}>LINK</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.detalis}>UPI</Text>
                    </View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Icon size={40} icon={icon2} style={{ backgroundColor: '#000' }} />
                            <TouchableOpacity
                        onPress={()=>navigation.navigate('Qrpay')}
                        >
                            <View>
                                <Text style={Styles.set3} >QR Pay </Text>
                                <Text style={Styles.qrpay}>GO cashless,after ride pay by scanning QR code</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Image size={40} source={require('../../assets/gpay.jpg')} style={{ backgroundColor: '#01D1C1', }} />
                            <TouchableOpacity
                        onPress={()=>navigation.navigate('Gpay')}
                        >
                            <Text style={Styles.set3} >GPay </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.detalis}>Others</Text>
                    </View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <Avatar.Image size={40} source={require('../../assets/rupee.jpg')} style={{ backgroundColor: '#01D1C1', }} />
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Cash')}
                        >
                            <Text style={Styles.set3} >Cash </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2', marginVertical: 15 }}></View>
                    <View style={Styles.set}>
                        <View style={Styles.set2}>
                            <MaterialCommunityIcons name="bank" size={20} />
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Passbook')}
                        >
                            <Text style={Styles.set3} > SHOW PASSBOOK </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2', marginVertical: 15 }}></View>
                    <Text style={Styles.privacy}> We value your privacy</Text>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default Payment


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    silde: {
        height: '20%',
        backgroundColor: '#F9D915'

    },
    icon: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    icon2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginHorizontal: 15


    },
    text: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: "500",
        color: 'black'

    },
    wall: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flex: 1,
        padding: 20,

    },
    detalis: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 10,
        color: '#515151',

    },
    box: {
        backgroundColor: '#000',
        borderRadius: 5, padding: 13


    },
    box2: {
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        padding: 20

    },
    profile: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10, marginHorizontal: 10
    }
})
