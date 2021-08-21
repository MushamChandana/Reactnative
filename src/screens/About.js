import React from 'react';
import { View, Text, Image } from 'react-native';

function Settings() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#BCBFD2'
    }}>
      <View style={{
        flex: 1, alignSelf: 'center', justifyContent: 'center',
        backgroundColor: '#BCBFD2'
      }}>
        <Text>About Screen</Text>
      </View>
    </View>
  );
}
export default Settings;