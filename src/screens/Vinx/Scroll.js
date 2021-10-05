import * as React from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import  MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Drawer } from 'react-native-paper'; 


function Scroll({navigation}){
    return(
        <View style={{flex:1}}>
         
      
        <View style={{flex:0.4,backgroundColor:"#ff7f50"}}>
            <View>
              <Image 
              source={{uri:'https://image.shutterstock.com/image-photo/handsome-man-spectacles-portrait-260nw-606177383.jpg'}}
              style={{height:80,width:80,borderRadius:50,marginLeft:20,marginTop:40,borderWidth:2,borderColor:"#ff7f50"}}
              />
            </View>
            <View>
            <Text style={{marginTop:10,marginLeft:20,fontSize:20,color:"white"}}>Alexandru Simonescu</Text>
            </View>
            <View>
            <Text style={{marginLeft:20,fontSize:17,color:"white"}}>hi@alexsimo.com</Text>
            </View>
            </View>
            <DrawerContentScrollView>
             <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:10}}>
            <MaterialCommunityIcons name="inbox-arrow-down" color={'#696969'} size={26} />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:10,fontSize:18}}> Home</Text>
           </View>
          </View>


          <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:20}}>
            <MaterialCommunityIcons name="star" color={'#696969'} size={26} />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18}}> Starred</Text>
           </View>
          </View>

          <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:20}}>
            <MaterialCommunityIcons name="send" color={'#696969'} size={26} />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18}}> Sent Email</Text>
           </View>
          </View>

          <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:20}}>
            <MaterialIcons name="drafts" color={'#696969'} size={26} />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18}}> Drafts</Text>
           </View>
          </View>



      <Text  style={{
    borderBottomColor  : '#a9a9a9',
    borderBottomWidth: 1
  }}>
       </Text>
       <Text  style={{
    fontSize:15,marginTop:15,marginLeft:10
  }}> Subheader
 
       </Text>

       <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:20}}>
            <MaterialIcons name="email" color={'#696969'} size={26} />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18}}> All Email</Text>
           </View>
          </View>


          <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:20}}>
            <MaterialCommunityIcons name="trash-can" color={'#696969'} size={26} />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18}}> Trash</Text>
           </View>
          </View>



          
          <View style={{flexDirection:"row"}}> 
            <View style={{marginLeft:20,marginTop:20}}>
            <AntDesign
            name="exclamationcircle"
            size={26}
            style={{color:"#696969"}}
            />
           </View>
           <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18}}> spam</Text>
           </View>
          </View>



           
     
        
         </DrawerContentScrollView>
         

        </View>

    );
}
export default Scroll