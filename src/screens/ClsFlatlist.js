import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Avatar } from 'react-native-paper';

export default class ClsFlatlist extends Component {
    constructor(props) {
        super(props)
        this.state = { userList: [] }
    }

    itemsArray = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    ];

    componentDidMount() {
        console.log("string...", this.state.userList)
        this.GetUserList()
    }
    renderRowItem = (test) => {
        return (
            <View style={{ margin: '5%',flexDirection:'row' }}>
                <View style={{marginLeft:10}}>
                  <Avatar.Image size={100} source={{uri:test.item.avatar}}/>
                  </View>
                  <View style={{marginLeft:30,marginTop:10}}>
                <Text style={styles.text}>{test.item.first_name}</Text>
                <Text style={styles.text}>{test.item.last_name}</Text>
                <Text style={styles.text}>{test.item.email}</Text>

                </View>
                {/* <Text style={styles.text }>{test.item.email}</Text> */}


            </View>
        );
    }
    Rowitem = () => {
        return (
            <View style={{ height: 1, backgroundColor: 'gray', marginLeft: '5%' }} />
        );
    }

    GetUserList = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then((response) => response.json())
            .then((responsejson) => {
                console.log(" response is ...", responsejson)

                this.setState({
                    userList: responsejson.data
                })
            })
    }
    render() {

        return (
            <SafeAreaView style={styles.safeview}>
                <View style={styles.safeview}>
                    <FlatList
                        data={this.state.userList}
                        renderItem={this.renderRowItem}
                        ItemSeparatorComponent={this.Rowitem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontFamily: 'bold',color:'#C44655'
    }
})