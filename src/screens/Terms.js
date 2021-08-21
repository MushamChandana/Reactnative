import React from 'react';
import { RefreshControl } from 'react-native';
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
        <Text>Terms Screen</Text>
      </View>
    </View>
  );
}
export default Settings;



