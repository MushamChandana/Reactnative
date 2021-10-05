import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { NavigationContainer } from '@react-navigation/native';

const Permissions = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View >
  
               
               
                <Image source={require('../../assets/rapido-5.jpg')}
                    style={styles.logo}
                />
                          <LinearGradient colors={[ '#ffffff','#ffffff', '#ffffff',  '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff', '#ffffff', '#ffffff', '#ffffff', '#5a5b59']} >
                <Text style={styles.title}>India's Beloved Bike Taxi Service</Text>
                <Text style={styles.subtitle}>To have a comfortable ride experience with</Text>
                <Text style={styles.subtitle1}>Rapido,please allow us the following permissons</Text>
            <View style={{flexDirection:'row',padding:20,marginTop:20,alignItems:'center',justifyContent:'center'}}>
                <View style={{marginRight:10 }}><MaterialCommunityIcons name="map-marker" size={30}  /></View>
           <View>
               <Text style={{color:'#828282',fontSize:15}}>Location: To locate you and get rides easily</Text>
           </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:30}}>
                <View style={{marginRight:10 }}><MaterialCommunityIcons name="file-phone" size={30}  /></View>
           <View>
               <Text style={{color:'#828282',fontSize:15}}>Phone: To verify your account and secure it</Text>
           </View>
            </View>
            </LinearGradient>
            <Button
            title=" Allow permissions"
            containerStyle={styles.box}
            buttonStyle={styles.box2}
            onPress={()=>navigation.navigate('Optnumber')}
            
            />
            </View>

        </View>
    )
}

export default Permissions

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        
        
    },
    logo: {
        alignSelf: 'center',
        paddingTop:20
    },
    title: {
        fontSize: 20,
        fontFamily: 'Kufam-SemiBoldItalic',
        fontWeight: 'bold',
        alignSelf: 'center', 
        paddingTop: 20,
        marginTop:30

    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Kufam-SemiBoldItalic',
        paddingTop:10,
        marginHorizontal:25,
        alignSelf:'center',
        color:'#828282'
    },
    subtitle1: {
        fontSize: 16,
        fontFamily: 'Kufam-SemiBoldItalic',
        marginHorizontal:20,
        alignSelf:'center',
        color:'#828282'

    },
    box:{
        backgroundColor:'#FECC09',
        borderRadius:10,
        marginTop:20,
        marginHorizontal:20
        
    },
    box2:{
        fontSize:10,
        padding:15,
     

    }




});
