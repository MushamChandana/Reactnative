import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'
import { Avatar } from 'react-native-paper';

const icon = () => {
    return (
        <View><MaterialCommunityIcons name="plus" size={23} color="#fff" /></View>
    )
}

const Favorites = ({navigation}) => {
    return (
        <View style={Styles.container}>

        <View style={styles.silde}>

            <View style={Styles.icon}>

                <View>
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                </View>
                <View style={Styles.icon2}>
                           <View>
                            <MaterialCommunityIcons name="help-circle" size={20} />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Support')}
                        >
                            <View>
                                <Text style={Styles.text}>Support</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

            </View>
            <View style={Styles.wall}>
                <Text style={{ fontSize: 30 }}>Favorites</Text>
            </View>
        </View>

        <View style={Styles.profile}>

                <View >
                    <Avatar.Icon size={40} icon={icon} style={{ backgroundColor: '#F9D915' }} />
                </View>
                <View style={{ marginHorizontal: 15, alignItems: "flex-start" }}>
                    <Text style={{ color: '#000', fontSize: 18 }}> Add Address</Text>
                </View>
            </View >
      
     
        </View>

    )
}

export default Favorites;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
  
})
