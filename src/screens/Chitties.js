import React,{useEffect} from 'react';
import { View, Text, ImageBackground } from 'react-native';


function Chitties({navigation}) {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Chittidashboard')
        }, 3000);
    }, [])
    return (
        <ImageBackground source={require('../assets/chitty.png')}
            style={{ flex: 1 }}>
                <View style={{flex:2,marginTop:300}}>
            <Text style={{fontSize:30,color:'#F53034',alignSelf:'center',justifyContent:'center'}}>ELE RAMACHANDRAM </Text>
            <Text style={{fontSize:30,color:'#F53034',alignSelf:'center',justifyContent:'center'}}>CHITS</Text>
            <Text style={{fontSize:25,color:'#2E2BB4',alignSelf:'center',justifyContent:'center'}}>SIRIPURAM</Text>
            </View>
        </ImageBackground>
    );
}
export default Chitties;