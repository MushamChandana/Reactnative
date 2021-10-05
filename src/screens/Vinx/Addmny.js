import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,KeyboardAvoidingView,ScrollView,Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Addmny = () => {
   
    const device_height = Dimensions.get(`window`).height - 24
     
    const [count ,setcount]= useState(" ")

    


    return (
    
        <KeyboardAvoidingView behavior="height"
        style={{flex:1}}
        
        >
            <ScrollView >
            <View style={{ height: device_height }}>
        <View style={styles.container}>

            <View style={styles.silde}>

                <View style={styles.icon}>

                    <View>
                        <MaterialCommunityIcons name="arrow-left" size={30} />
                    </View>

                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={styles.text}>Add Money</Text>
                </View>
            </View>
            <View style={{padding:30}}>
                <View style={styles.box}>
                    <Text style={{fontSize:25}}>₹</Text>
                    <TextInput 
                    keyboardType="number-pad"
                    onChangeText={text => setcount(text)}
                    value={count}
                    />
                </View>
            </View>
        </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default Addmny;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    silde: {
        height: '22%',
        backgroundColor: '#F9D915'

    },
    icon: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        padding: 30

    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor:'#DDDDDD',
        borderRadius:5,
        borderColor:'#DDDDDD'

    }
})
