import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Ticket = () => {
    return (
        <View style={styles.container}>

            <View style={styles.silde}>

                <View style={styles.icon}>


                    <MaterialCommunityIcons name="arrow-left" size={30} />
                    <Text style={{ fontSize: 18, marginHorizontal: 15 }}>Ticket History</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View style={styles.circle }></View>
                <Text> No tickets created</Text>
            </View>
        </View>
    )
}

export default Ticket


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