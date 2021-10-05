import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const device_height = Dimensions.get(`window`).height - 24





const icon = () => {
    return (
        <View><MaterialCommunityIcons name="account" size={23} color="white" /></View>
    )
}
const icon2 = () => {
    return (
        <View><MaterialCommunityIcons name="cards-heart" size={23} color="white" /></View>
    )
}
const icon3 = () => {
    return (
        <View><MaterialCommunityIcons name="tune" size={23} color="white" /></View>
    )
}
const icon4 = () => {
    return (
        <View><MaterialCommunityIcons name="badge-account" size={23} color="white" /></View>
    )
}
const icon5 = () => {
    return (
        <View><MaterialCommunityIcons name="google-translate" size={23} color="white" /></View>
    )
}
const icon6 = () => {
    return (
        <View><MaterialCommunityIcons name="login-variant" size={23} color="white" /></View>
    )
}
const icon7 = () => {
    return (
        <View><MaterialCommunityIcons name="beta" size={23} color="white" /></View>
    )
}
const icon8 = () => {
    return (
        <View><MaterialCommunityIcons name="moped" size={23} color="white" /></View>
    )
}


const SettingScreen = ({ navigation }) => {



    return (
        <KeyboardAvoidingView behavior="height"
            style={{ flex: 1 }} >
            <ScrollView style={{ height: device_height }}>
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

                        <View style={{ alignSelf: 'stretch', justifyContent: 'flex-end', flex: 1, marginHorizontal: 40, marginVertical: 25 }}>
                            <Text style={{ fontSize: 30, color: 'black' }}>Settings</Text>
                        </View>


                    </View>
                    <View>
                        <Text style={styles.detalis}>General </Text>
                    </View>
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon} style={{ backgroundColor: '#009788', }} />
                        </View>
                        <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Profilescreen')}
                            >

                                <Text style={{ fontSize: 17, fontWeight: '500' }}>Profile</Text>
                                <Text style={{ color: '#828282', fontSize: 15 }}>+91-9505955908</Text>
                            </TouchableOpacity>

                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon2} style={{ backgroundColor: '#FF9700', }} />
                        </View>
                        <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Favorites')}
                            >

                                <Text style={{ fontSize: 17, fontWeight: '500' }}>Favorites</Text>
                                <Text style={{ color: '#828282', fontSize: 15 }}>Manage favourite locations</Text>
                            </TouchableOpacity>

                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon3} style={{ backgroundColor: '#1B84FF', }} />
                        </View>
                        <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Preferences')}
                            >

                                <Text style={{ fontSize: 17, fontWeight: '500' }}>perferences</Text>
                                <Text style={{ color: '#828282', fontSize: 15 }}>Manage perferences</Text>
                            </TouchableOpacity>

                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon5} style={{ backgroundColor: '#1a3d20', }} />
                        </View>
                        <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Preferences')}
                            >

                                <Text style={{ fontSize: 17, fontWeight: '500' }}>App Language</Text>
                                <Text style={{ color: '#828282', fontSize: 15 }}>English </Text>
                            </TouchableOpacity>

                        </View>
                    </View >

                    <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2', marginTop: 10 }}>
                    </View>
                    <Text style={styles.detalis}>Others </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('AboutRapido')}
                    >
                        <View style={styles.profile}>

                            <View >
                                <Avatar.Icon size={40} icon={icon8} style={{ backgroundColor: '#FDCB0A', marginHorizontal: 10, }} />
                            </View>
                            <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>

                                <Text style={{ fontSize: 17, fontWeight: '500' }}>About</Text>
                                <Text style={{ color: '#828282', fontSize: 15 }}>5.8.4</Text>

                            </View>
                        </View >
                    </TouchableOpacity>

                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon7} style={{ backgroundColor: '#4A148C', marginHorizontal: 10, }} />
                        </View>
                        <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>

                            <Text style={{ fontSize: 17, fontWeight: '500' }}>Subscribe to Beta</Text>
                            <Text style={{ color: '#828282', fontSize: 15 }}>Get Early access to latest Features</Text>
                        </View>
                    </View >
                    <View style={styles.profile}>

                        <View >
                            <Avatar.Icon size={40} icon={icon6} style={{ backgroundColor: '#795547', marginHorizontal: 10, }} />
                        </View>
                        <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CreateScreen')}
                            >
                                <Text style={{ fontSize: 17, fontWeight: '500' }}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View >

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}




export default SettingScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    silde: {
        height: '18%',
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
        marginBottom: 10,
        color: '#515151',

    },
    profile: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10, marginHorizontal: 10
    }
})