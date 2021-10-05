import React , {useState} from 'react'
import { View, Text, StyleSheet, TextInput,KeyboardAvoidingView,ScrollView ,Dimensions} from 'react-native'
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
const Optnumber = (props) => {
    const device_height = Dimensions.get(`window`).height - 24

    const [number, setNumber] = useState('')
    const [confirm, setConfirm] = useState(null);

    const  signin = async () => {
     
        const confirmation = await auth().signInWithPhoneNumber('+91'+number);
        console.log("confirmation", confirmation)
        if(confirmation){
            setConfirm(confirmation);
            props.navigation.navigate('OTP',{'confirm':confirmation})
        }
    }


    return (
        
        <KeyboardAvoidingView behavior="height"
        style={{flex:1}} >
            <ScrollView >

            <View style={{ height: device_height }}>   
                     <View style={styles.silde}>
                <View style={styles.icon}>
                    <View>
                        <MaterialCommunityIcons name="arrow-left" size={30} />
                    </View>
                    <View style={styles.icon2}>
                        <View>
                            <MaterialCommunityIcons name="help-circle-outline" size={20} />
                        </View>
                        <View>
                            <Text style={styles.text}>Help</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.silde2}>
                    <Text style={styles.enter}>Enter Phone Number</Text>
                    <Text style={{ color: '#828282' }}>OTP will be sent to this number</Text>
                    <View style={styles.number}>
                        <Text style={{ padding: 10, fontSize: 18, marginLeft: 10 }}>
                            +91
                        </Text>
                        <TextInput
                            placeholder="Enter number"
                            keyboardType="number-pad"
                            onChangeText={(value) => setNumber(value)}
                            value={number}
                            maxLength={10}
                        />

                    </View>
                    <Text style={styles.agree}>By continuing,you agree to the terms and privacy policy of Rapido</Text>
                    <Button
                        title="Send OTP"
                        buttonStyle={styles.box}
                        containerStyle={styles.box2}
                         onPress={signin}
                        titleStyle={{ color: '#A4A5A5', fontSize: 18 }}
                    />

                </View>
            </View>

        </View>
          </ScrollView>
          </KeyboardAvoidingView>
    )
}

export default Optnumber

const styles = StyleSheet.create({
    container: {
        flex: 1,




    },
    silde: {
        backgroundColor: '#FFD251',
        height: '100%',
        flex: 1,


    },
    icon: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    icon2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        marginRight: 10,


    },
    text: {
        marginLeft: 5,
        fontSize: 13

    },
    silde2: {
        backgroundColor: '#fff',
        flex: 1, borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 30, padding: 20
    },
    enter: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#828282',
        marginTop: 10
    },
    number: {
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    agree:{
        textAlign: 'center',
        marginTop:370,
        fontSize: 13,
    },
    box: {
        backgroundColor: '#EDEEF2',
        borderRadius: 5,


    },
    box2: {
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',

    }
})