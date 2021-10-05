import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Transaction = () => {
    return (
        <View style={styles.container}>

            <View style={styles.silde}>

                <View style={styles.icon}>
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                    <Text style={{ fontSize: 18, marginHorizontal: 20 }}> Wallet Transactions</Text>

                </View>
                <View style={{ justifyContent: 'flex-end', flex: 1,padding:20 }}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'flex-end',
                        justifyContent: 'space-around'
                    }}>
                        <Text style={{fontSize:18}}>All</Text>
                        <Text style={{fontSize:18}}>Money</Text>
                        <Text style={{fontSize:18}}>Coins</Text>
                    </View>
                </View>
            </View>
           


        </View>
    )
}

export default Transaction

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
        marginTop: 20,
        marginHorizontal: 10,
        alignItems: 'center',
    },
})
