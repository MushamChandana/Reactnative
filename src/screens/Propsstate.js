import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Propsstate extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    changemycount = () =>{
        this.setState(
            {count:this.state.count+1}
        )
        console.log("count button is increased")
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ color: 'red' }}>hello world welcome to the world</Text>
                <Propsstate1 name={"my name is chandana"} />
                <Text>value</Text>
                <Text>{this.state.count}</Text>
                <Button
                    onPress={this.changemycount}
                    title="ADD"
                    color="#841584"
                />        
                    </View>
        );
    }
}

class Propsstate1 extends Component {
    render() {
        return (
            <View>
                <Text>hello heelo world {this.props.name}</Text>
            </View>
        );
    }
}