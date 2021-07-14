import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
function Chittidashboard({ navigation }) {
    return (
        <ImageBackground source={require('../assets/dashboard1.png')}
            style={{ flex: 1 }}>
            <View>
                <Text style={{
                    fontSize: 30,
                    alignSelf: 'center', marginTop: 10, color: '#096322'
                }}>DASHBOARD</Text>
                <View >

                    <Button
                        title="1 LAKH CHIT FORMAT"
                        buttonStyle={{ borderRadius: 15 }}
                        containerStyle={{ width: 250, alignSelf: 'center', marginTop: 30 }}
                        onPress={() => navigation.navigate('FirstLakh')}

                    />
                    <Button
                        title="2 LAKH CHIT FORMAT"
                        buttonStyle={{ borderRadius: 15 }}
                        containerStyle={{ width: 250, alignSelf: 'center', marginTop: 30 }}
                        onPress={() => navigation.navigate('Twolakh')}

                    />
                    <Button
                        title="5 LAKH CHIT FORMAT"
                        buttonStyle={{ borderRadius: 15 }}
                        containerStyle={{ width: 250, alignSelf: 'center', marginTop: 30 }}
                        onPress={() => navigation.navigate('Fivelakh')}

                    />


                    <Button
                        title="KNOW MY EMI"
                        buttonStyle={{ borderRadius: 15 }}
                        containerStyle={{ width: 250, alignSelf: 'center', marginTop: 200 }}
                        onPress={() => navigation.navigate('Myemi')}

                    />
                </View>

            </View>

        </ImageBackground>
    );
}
export default Chittidashboard;