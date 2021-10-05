import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Profilescreen = ({navigation}) => {
    const icon = () => {
        return (
            <View><MaterialCommunityIcons name="email" size={23} color="white" /></View>
        )
    }
    const icon2 = () => {
        return (
            <View><MaterialCommunityIcons name="account" size={23} color="white" /></View>
        )
    }
    const icon3 = () => {
        return (
            <View><MaterialCommunityIcons name="calendar-month-outline" size={23} color="white" /></View>
        )
    }
    const icon4 = () => {
        return (
            <View><MaterialCommunityIcons name="badge-account" size={23} color="white" /></View>
        )
    }
    const icon5 = () => {
        return (
            <View><MaterialCommunityIcons name="shield-alert" size={23} color="white" /></View>
        )
    }
    const icon6 = () => {
        return (
            <View>
                <MaterialCommunityIcons name="login-variant" size={23} color="white" />
            </View>
        )
    }

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
                        <View>
                            <Text style={styles.text}>Support</Text>
                        </View>
                    </View>
                </View>
                {/* <View> */}
                    {/* <MaterialCommunityIcons name="account" size={120} color="#A2A2A2"
                    style={{ alignSelf: 'center', justifyContent: 'center',position:'absolute',flex:1}} /> */}
                    {/* <Text>HELL</Text>
                </View> */}
                {/* <BackgroundImage source={image}/> */}
                <View style={{alignSelf:'stretch',justifyContent:'flex-end',flex:1,marginHorizontal:40,marginVertical:25}}>
                <Text style={{fontSize:30}}>Musham Chandhana</Text>
                <Text style={{color:"#585858"}}>+91 9505955908</Text>
                </View>


            </View>
            <View>
                <Text style={styles.detalis}>Profile </Text>
                <View style={{ padding: 5 }} >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon} style={{ backgroundColor: '#2898EA' }} />
                        </View>
                        <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                            <Text style={{ color: '#828282', fontSize: 15 }}> Email</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>musham.Chandana@gmail.com</Text>
                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon2} style={{ backgroundColor: '#009788' }} />
                        </View>
                        <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                            <Text style={{ color: '#828282', fontSize: 15 }}> Gender</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>FeMale</Text>
                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon3} style={{ backgroundColor: '#FF9700' }} />
                        </View>
                        <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                            <Text style={{ color: '#828282', fontSize: 15 }}> Date of birth</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>3/12/1996</Text>
                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon4} style={{ backgroundColor: '#0CB7D0' }} />
                        </View>
                        <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                            <Text style={{ color: '#828282', fontSize: 15 }}> Member since</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Sep 2021</Text>
                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon5} style={{ backgroundColor: '#FE3D00' }} />
                        </View>
                        <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                            <Text style={{ color: '#828282', fontSize: 15 }}> Emergency contacts</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', fontWeight: '900' }}>Share ride details with trusted contacts</Text>
                        </View>
                    </View >
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                </View>
                <Text style={styles.detalis}>Others </Text>
                <View style={styles.profile}>

                    <View >
                        <Avatar.Icon size={40} icon={icon6} style={{ backgroundColor: '#795547', marginHorizontal: 10, marginTop: 5 }} />
                    </View>
                    <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('CreateScreen')}
                        >
                        <Text style={{ fontSize: 17, fontWeight: '500' }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View >

            </View>

        </View>
    )
}

export default Profilescreen

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
    detalis: {
        fontSize: 17,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 15,
        color: '#515151',

    },
    profile: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10
    }
})
