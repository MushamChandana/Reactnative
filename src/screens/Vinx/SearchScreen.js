import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, ScrollView,Dimensions,KeyboardAvoidingView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const device_height = Dimensions.get(`window`).height - 24

const SearchScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.silde}>

                <View style={styles.icon}>


                    <MaterialCommunityIcons name="arrow-left" size={30} />
                    <Text style={{ fontSize: 18, marginHorizontal: 15 }}>Search</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior="height"
            style={{ flex: 1 }} >
            <ScrollView style={{ height: device_height }}>
           <View style={{borderWidth:1,borderColor:"#dce1e8",backgroundColor:'#dce1e8',
        height:60,marginVertical:20,marginHorizontal:30}}>
            <Text style={{fontSize:12,marginHorizontal:10}}>Enter the issue you are looking for</Text>
            <TextInput
            style={{borderBottomWidth:2,borderColor:'#000',marginTop:-10,marginHorizontal:10}}/>
            

           </View>
           </ScrollView>
           </KeyboardAvoidingView>
        </View>
    )
}

export default SearchScreen 


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    silde: {
        height: '8%',
        backgroundColor: '#F9D915'

    },
    icon: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    circle: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderColor: '#9B9B9B',
        backgroundColor: '#9B9B9B',
        marginVertical: 10
    }
})