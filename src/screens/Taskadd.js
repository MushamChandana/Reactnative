import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function Taskadd() {
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(0);
    const [result, setresult] = useState(0);


    const output = () => {
        var N1 = parseInt(number);
        var N2 = parseInt(value);
       // var R=N1+N2;
       // Alert(R)
        const result = N1 && N2 ? N1 + N2 : null;
       //  setresult(N1 && N2 ? N1 + N2 : null)
       // setresult(result)
    }
    return (
        <View>
            <Text style={{
                fontSize: 25,
                alignSelf: 'center',
                justifyContent: 'center',
                margin: 10, marginTop: 40,
                color: 'red'
            }}> ADD TWO VALUES
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    margin: 30
                }}
            >
                <TextInput
                    style={styles.input}
                    onChangeText={text => setNumber(text)}
                    value={number}
                    placeholder="enter a num"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setValue(text)}
                    value={value}
                    placeholder="enter a num"
                    keyboardType="numeric"
                />

            </View>

            <Button
                title="add"
                onPress={output}
                //value={add}
            />

            <Text
                style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    marginTop: 30
                }}>output is A {result} </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default Taskadd;