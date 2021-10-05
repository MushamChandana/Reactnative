import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'

const device_height = Dimensions.get(`window`).height - 24



const information = [ {
        name:"Email",
        title:"Allow emails for Promotions and offers",
        subtitle:"Allow emails for invoice"
    }]

    const information2 = [{
        name:'SMS',
        title:"Allow SMS for invoice",
        subtitle:" Allow promotional SMS offers"
    }]
    const information3 = [{
        name:'Push notifications',
        title:"Allow moblie push notifications",
    }]
    const information4 = [{
        name:'Picture in picture(PIP)',
        title:"Allow picture in picture access",
    }]



const Preferences = ({navigation}) => {
    
    return (
        <View style={Styles.container}>

        <View style={styles.silde}>

            <View style={Styles.icon}>

                <View>
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                </View>
             

            </View>
            <View style={Styles.wall}>
                <Text style={{ fontSize: 30 }}>Preferences</Text>
            </View>
        </View>
        <KeyboardAvoidingView behavior="height"
            style={{ flex: 1 }} >
            <ScrollView style={{ height: device_height }}>

        {information.map((item,index) =>{
            return(
                <View style={styles.preference} key={index}>
                    <Text style={styles.part1}>{item.name}</Text>
                    <View style={styles.bit}>
                    <Text style={styles.part2}>{item.title}</Text>
                    </View>
                    <Text style={styles.part2}>{item.subtitle}</Text>

                </View>
            )}
        )}
 <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                </View>
                {information2.map((item,index) =>{
            return(
                <View style={styles.preference} key={index}>
                    <Text style={styles.part1}>{item.name}</Text>
                    <View style={styles.bit}>
                    <Text style={styles.part2}>{item.title}</Text>
                    </View>
                    <Text style={styles.part2}>{item.subtitle}</Text>
                 

                </View>
            )}
        )}
         <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                </View>

                {information3.map((item,index) =>{
            return(
                <View style={styles.preference} key={index}>
                    <Text style={styles.part1}>{item.name}</Text>
                    {/* <View style={styles.bit}> */}
                    <Text style={styles.part2}>{item.title}</Text>
                    {/* </View> */}

                </View>
            )}
        )}
      <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                </View>
                
                {information4.map((item,index) =>{
            return(
                <View style={styles.preference} key={index}>
                    <Text style={styles.part1}>{item.name}</Text>
                    {/* <View style={styles.bit}> */}
                    <Text style={styles.part2}>{item.title}</Text>
                    {/* </View> */}

                </View>
            )}
        )}
                </ScrollView>
                </KeyboardAvoidingView>
     
        </View>

    )
}

export default Preferences;

const styles = StyleSheet.create({
    
    silde: {
        height: '25%',
        backgroundColor: '#F9D915'

    },
    preference:{
        padding:10
    },
    part1:{

        marginVertical:10,
        fontSize:16,
        fontFamily: 'PTSans-Bold',
        fontWeight:'bold',
        color:'#525252',
        marginBottom:10

    },
    part2:{
        marginVertical:10,
        fontSize:16,
        fontFamily: 'PTSans-Bold',
        color:'#000',
        marginBottom:30


    }
  
})
