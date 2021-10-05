import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Switch } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Wallet = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    <Text style={{ fontSize: 18 }}>Total Wallet Balance</Text>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>₹0.00</Text>
                </View>

            </View>

            <View style={{
                borderWidth: 1, flexDirection: 'row', borderColor: '#D0CED5', borderRadius: 10, marginTop: -20, backgroundColor: '#ffffff',
                marginHorizontal: 20, height: 70, alignItems: 'center', justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                    <Image source={require('../../assets/money.jpg')}

                        style={{ height: 25, width: 25, backgroundColor: '#F0F0F0' }} />
                    <Text style={{ marginHorizontal: 20, fontSize: 16 }} >Rapido Money </Text>
                </View>
                <View>
                    <Text style={{ marginHorizontal: 15, fontSize: 16 }}>₹0.00</Text>
                </View>

            </View>
            <View style={{
                borderWidth: 1, flexDirection: 'row', borderColor: '#D0CED5', borderRadius: 10, backgroundColor: '#ffffff',
                marginHorizontal: 20, height: 80, alignItems: 'center', justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center' }}>
                    <View>
                        <Image source={require('../../assets/coin.jpg')}
                            style={{ height: 20, width: 20, }} />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 16 }} >Rapido Coins</Text>
                        <Text>1 coin = ₹ 1</Text>
                    </View>
                </View>



                <View>
                    <Text style={{ marginHorizontal: 15, fontSize: 16 }}>₹0</Text>
                </View>

            </View>

            <View style={{
                borderWidth: 1, flexDirection: 'row', borderColor: '#D0CED5', borderRadius: 10, backgroundColor: '#ffffff',
                marginHorizontal: 20, height: 60, alignItems: 'center', justifyContent: 'space-between', marginTop: 30
            }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center' }}>
                    <View>
                        <Image source={require('../../assets/file.jpg')}
                            style={{ height: 20, width: 20 }} />
                    </View>
                    <Text style={{ fontSize: 16, marginHorizontal: 20 }} >View all transactions</Text>
                </View>



                <View style={{ marginHorizontal: 15 }}>
                    <MaterialCommunityIcons name="chevron-right" size={27} color="#D0CED5" onPress={() => navigation.navigate('Transaction')} />

                </View>

            </View>

            <View style={{
                borderWidth: 1, flexDirection: 'row', borderColor: '#D0CED5',
                borderRadius: 10, backgroundColor: '#E7E6EA',
                marginHorizontal: 20, height: 50, alignItems: 'center', justifyContent: 'space-between', marginTop: 30
            }}>
                { isEnabled ?
               
                    <Text style={{color:'#3ca865',marginHorizontal:20}}>Wallet is your default payment method</Text>
               
              :  <View style={{ marginHorizontal: 20 }}>
                    <Text>Set as default payment method</Text>
                    <Text style={{ fontSize: 13, color: '#828282' }}>Currently set to Cash</Text>
                </View>
                }
                <Switch
                    trackColor={{ false: "#C8C7CA", true: "#B0AFB2" }}
                    thumbColor={isEnabled ? "#000" : "#F1EFF6"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{marginHorizontal:10}}
                />

            </View>



            <Button
                title="Add Money"
                buttonStyle={styles.box}
                containerStyle={styles.box2}
                onPress={() => navigation.navigate('Addmny')}
                titleStyle={{ color: '#F9D915', fontSize: 18 }}
            />

        </View>
    )
}
export default Wallet;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    silde: {
        height: '25%',
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

    },
    wall: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
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

    }
})