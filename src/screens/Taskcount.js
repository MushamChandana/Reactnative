import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Taskcount() {

    const [Count, setCount] = useState(10);

    const decrement = () => {
        if(Count <= 0) {
            setCount(Count);
        } else {
          setCount(Count - 1);
        }
      }

return (
    <View>
        <Text style={{
            fontSize: 25,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10, marginTop: 40,
            color: 'red'
        }}>
            increment and decrement values</Text>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 30
        }}>
            <Button
                onPress={() => setCount(Count + 1)}
                title="increment"
            />
            <Text> {Count}</Text>
            <Button
            onPress={decrement}


                title="decrement" />




        </View>
    </View>
);

}

export default Taskcount;