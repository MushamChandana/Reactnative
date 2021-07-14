import React from 'react';
import { View, Text, Image } from 'react-native';

function Fivelakh() {
  return (
    <View style={{
      flex: 1, alignSelf: 'center', justifyContent: 'center',
      backgroundColor: '#BCBFD2'
    }}>
      <Image
        source={require('../assets/Fivelakh.jpeg')}
        style={{ width: 450, height: 480 }}
      />
    </View>
  );
}
export default Fivelakh;