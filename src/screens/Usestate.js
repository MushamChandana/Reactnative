import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Usestate = (props) => {
    const [ishungry, sethungry] = useState(true);

    return (
        <View>
            <Text> i am {props.name} and {ishungry ? "hungry" : "full"}  </Text>
            <Button
                onPress={() => { sethungry(false) }}
                disabled={!ishungry}
                title={ishungry ? "Pour me some milk, please!" : "Thank you!"} />
        </View>
    );
}

const Result = () => {
    return (
        <View>
            <Text>
                <Usestate  name="sudha"/>
                <Usestate name="chandu"/>
            </Text>
        </View>
    );
}
 export default Result;



