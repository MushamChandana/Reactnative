import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,KeyboardAvoidingView,ScrollView,Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CreateScreen = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const [name,setname]=useState(" ")

    const [email,setemail]=useState(" ")
   
    const code = () => {
        setChecked(!checked)
    }
   
    const device_height = Dimensions.get(`window`).height - 24

    


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
                <Text style={styles.text2}>Create your profile</Text>
            </View>
            <View style={styles.silde2}>
                <Text style={styles.details}>
                    Enter Full Name
                </Text>
                <TextInput
                    // dense="ture"
                    // value={}
                    onChangeText={text => setname(text)}
                    value={name}
                    placeholder="enter your name"
                    style={{ borderBottomWidth: 1, marginBottom: 35, marginTop: -10 }}
                />
             

                <Text style={styles.details}>
                    Enter  Email
                </Text>
                <TextInput
                    // dense="ture"
                    onChangeText={text => setemail(text)}
                    value={email}
                    placeholder="enter your name"
                    style={{ borderBottomWidth: 1, marginBottom: 30, marginTop: -10 }}
                />
                <Text style={styles.text3}>Gender</Text>
                <View style={styles.gender}>
                    <View style={styles.male} >
                        <View>
                            <MaterialCommunityIcons name="gender-male" size={20} />
                        </View>
                        <View>
                            <Text>Male</Text>
                        </View>
                    </View>
                    <View style={styles.male} >
                        <View>
                            <MaterialCommunityIcons name="gender-female" size={20} />
                        </View>
                        <View>
                            <Text>FeMale</Text>
                        </View>
                    </View>
                    <View style={styles.male} >
                        <View>
                            <MaterialCommunityIcons name="gender-male-female" size={20} />
                        </View>
                        <View>
                            <Text >Other</Text>
                        </View>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
                    <View>

                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={code} />
                    </View>
                    <View>
                        <Text style={styles.text4} > I have a referral code</Text>
                    </View>
                    {/* <View>
                        {checked ? <TextInput/>:'null'}
               
                    </View> */}
     
                </View>

              

            </View>
            <Button
                title="Proceed"
                buttonStyle={styles.box}
                containerStyle={styles.box2}
                onPress={()=> navigation.navigate('Profilescreen')}
                titleStyle={{ color: '#A4A5A5', fontSize: 18 }}
            />
            </View>
     
     </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    silde: {
        height: '18%',
        backgroundColor: '#FFD251',
  
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
    text2: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold",
    
        // fontFamily: 'Kufam-SemiBoldItalic',

    },
    silde2: {
        padding: 20,
        marginTop: 25

    },
    details:
    {
        fontSize: 18,
        opacity: 0.8,
        marginTop:10
    },
    text3:
    {
        fontSize: 16,
        fontFamily: 'georgia',
        fontWeight: 'bold',
    },
    male:
    {
        flexDirection: 'row',
        borderWidth: 1,
        height: 30,
        width: 90,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#E2E1E2',
        borderRadius: 5,
        borderColor: '#A4A5A5'
    },
    gender: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        marginRight: 10,
        borderColor: '#A4A5A5',
        backgroundColor: '#E2E1E2'
    },
    text4: {
        fontSize: 16,
        fontWeight: "bold",
    },
    box: {
        backgroundColor:'#EDEEF2',
        borderRadius: 10,
        color: 'red'

    },
    box2: {
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%', padding: 25

    }


})

