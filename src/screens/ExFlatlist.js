import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';

function ExFlatlist() {

    const [userList, setuserList] = useState([ ]);

    // itemsArray = [  {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },
    //   {
    //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //     title: 'Second Item',
    //   },
    //   {
    //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //     title: 'Third Item',
    //   },
    // ];
    useEffect(() => {
        GetUserList();
      }, []);

    renderRowItem = (test) => {
        return (
            <View style={{ margin: '5%' }}>
                
                <Text style={styles.text }>{test.item.first_name}</Text>
                <Text style={styles.text }>{test.item.last_name}</Text>
                <Text style={styles.text }>{test.item.email}</Text>


            </View>
        );
    }
    Rowitem = () =>{
        return(
            <View style={{height:1,backgroundColor:'gray',marginLeft:'5%'}}/>
        );
    }

    GetUserList = () =>{
        fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((responsejson) => {
          console.log(" response is ..." ,responsejson)
          setuserList({
              userList : responsejson.data
          })
        })
    }
 
    return (
        <SafeAreaView style={styles.safeview}>
            <View>
                <FlatList
                    data={userList}
                    renderItem={renderRowItem}
                    ItemSeparatorComponent={Rowitem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}
export default ExFlatlist;
const styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontFamily: 'bold',
    }
})