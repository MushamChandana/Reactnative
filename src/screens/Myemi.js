import React,{useState} from 'react';
import { View, Text, ImageBackground, TextInput,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'
function Myemi() {
    const [chitti, setchitti] = useState(0);
    const [month, setmonth] = useState(0);
    const [emi, setemi] = useState(0);
    const [lift, setlift] = useState(0);
    const [aution, setaution] = useState(0);


    const output = () => {
        var N1 = parseInt(chitti);
        var N2 = parseInt(month);
        //const emi = N1 && N2 ? N1*(360+(N2-1)*70) : null;
        setemi(N1 && N2 ? N1*(3670+(N2-1)*70) : null);
        setlift(N1 && N2 ?(N1*(3670+(N2-1)*70))*20-(N1*3000) : null);
        setaution(N1 && N2 ? (N1*100000) - ((N1*(3670+(N2-1)*70))*20-(N1*3000)): null);

    }


    return (
        <ImageBackground source={require('../assets/bubbles2.jpeg')}
            style={{ flex: 1 }}>
            <View>
                <Text
                style={{
                    fontSize: 35,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    margin: 10, marginTop: 40,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: '#B41D1D'}}> My EMI</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    margin: 25
                }}>
                    <Text style={{fontSize:25,marginTop:15,color:'#263BEC'}}>CHITTI :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setchitti(text)}
                    value={chitti.toString()}
                    placeholder="enter a num"
                    keyboardType="numeric"
                />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    
                }}>
                    <Text style={{fontSize:25,marginTop:20,color:'#263BEC'}}>MONTH :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setmonth(text)}
                    value={month.toString()}
                    placeholder="enter a num"
                    keyboardType="numeric"
                    
                />
                
                </View>
                
            <Button
                title="SUBMIT"
                buttonStyle={{backgroundColor:'#B41D1D',borderRadius:15}}
                containerStyle={{width:180,alignSelf:'center',marginTop:30}}
                onPress={output}
            />
                <Text
                style={{
                    fontSize: 25,
                    alignSelf: 'center',
                    marginTop: 60
                }}>EMI:  {emi}  </Text>
                  <Text
                style={{
                    fontSize: 25,
                    alignSelf: 'center',
                    marginTop: 30
                }}>LIFTING: {lift}   </Text>
                  <Text
                style={{
                    fontSize: 25,
                    alignSelf: 'center',
                    marginTop: 30
                }}>AUCTION: {aution}   </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width:150,
        margin: 12,
        borderWidth: 2,
        fontSize:25,
        borderRadius:15,
        color:'black'
    },
});
export default Myemi;