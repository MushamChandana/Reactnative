import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profilescreenmap = () => {
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
            <View><MaterialCommunityIcons name="login-variant" size={23} color="white" /></View>
        )
    }
    const ProfileData = [

        { 
            iconName:{icon},
            title: 'Email',
            subtitle: 'musham.chandana@gamil.com'
        },
        {
            iconName:{icon2},
            title: 'Gender',
            subtitle: 'Female'
        },
        {
            iconName:{icon3},
            title: 'Data of birth',
            subtitle: ' 3/12/1996'
        },
        {
            iconName:{icon4},
            title: 'Member since',
            subtitle: 'Sep 2021'
        },
        {
            iconName:{icon5},
            title: 'Emergency contacts',
            subtitle: 'share ride details with trusted contacts'
        },

    ]
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

                <View style={{ alignSelf: 'stretch', justifyContent: 'flex-end', flex: 1, marginHorizontal: 40, marginVertical: 25 }}>
                    <Text style={{ fontSize: 30 }}>Musham Chandana</Text>
                    <Text style={{ color: "#585858" }}>+91 9505955908</Text>
                </View>


            </View>
            <View>
                <Text style={styles.detalis}>Profile </Text>
            </View>
            {ProfileData.map((item, index) => {
                return (
                    <View style={styles.profile} key={index}>

                        <View >
                            <Avatar.Icon size={40} icon={item.iconName} style={{ backgroundColor: '#2898EA' }} />
                        </View>
                        <View style={{ marginHorizontal: 18, alignItems: "flex-start" }}>
                            <Text style={{ color: '#828282', fontSize: 15 }}> {item.title}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.subtitle}</Text>
                        </View>
                    </View>



                )
            }

            )
            }

            <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
            </View>
            <Text style={styles.detalis}>Others </Text>
            <View style={styles.profile}>

                <View >
                    <Avatar.Icon size={40} icon={icon6} style={{ backgroundColor: '#795547', marginHorizontal: 10, marginTop: 5 }} />
                </View>
                <View style={{ marginHorizontal: 10, alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 17, fontWeight: '500' }}>Logout</Text>
                </View>
            </View >
        </View>

    )
}

export default Profilescreenmap;



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
        marginBottom: 10,
        color: '#515151',

    },
    profile: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10
    }
})