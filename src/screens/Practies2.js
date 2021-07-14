import React from 'react';
import { View, Text, ScrollView, Image, TextInput} from 'react-native';

function Example2() {
    return (
        <ScrollView>
            <Text>hello world</Text>
            <View>
                <Text>hello world</Text>
                <Image source={{ uri: "https://static.india.com/imageTopics/3d40599e241ac05b841f89600d8c0575.jpg" }}
                    style={{ width: 200, height: 200 }} />
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'red',
                    borderWidth: 1
                }}
                defaultValue="You can type in me"
            />

        </ScrollView>

    );
}
export default Example2;