import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text, Image,ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Avatar } from 'react-native-paper';

export default function Youtube() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const courseData=[
    {
      image:require('../assets/baby2.jpeg'),
      title:'Chandhana'
    },
    {
      image:require('../assets/baby2.jpeg'),
      title:'sudhakar'
    },
    {
      image:require('../assets/baby2.jpeg'),
      title:'Chandhana'
    },
  ]

  return (
    <ScrollView>
    <View>
      <YoutubePlayer
        height={230}
        play={playing}
        videoId={"JUzJaWZYw6Q"}

        // playList={'https://youtu.be/JUzJaWZYw6Q'}    
        onChangeState={onStateChange}
      />
      <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold',color:'#000' }}>Snehitha Birthday Shoot</Text>
      <Text style={{ marginLeft: 10 }}>1.8k views.  Jul 17, 2021</Text>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Avatar.Image size={50} source={require('../assets/sudhakar.jpeg')}
            style={{ marginTop: 30, marginLeft: 10 }} />
        </View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 10, fontSize: 20 }}>Sudhakar</Text>
          <Text style={{ marginLeft: 10 }}>1.5K subscribers</Text>
        </View>
        <View>
          <Text style={{ marginLeft: 80, marginTop: 35, fontSize: 20, fontWeight: 'bold', color: '#D2182D' }}> SUBSCRIBE</Text>
        </View>

      </View>
      {courseData.map((item,index)=>{
        return(
          <View style={{ flexDirection: 'row' }} key={index}>
          <View style={{height:100,width:'90%',flexDirection:'row',elevation:2,marginHorizontal:20,marginTop:20,borderRadius:10,backgroundColor:'#fff',marginBottom:5}}>
            <Image source={item.image}
              style={{
                width: 100, height: 100, borderTopLeftRadius:10,borderBottomLeftRadius:10
      
              }} />
            <View style={{paddingTop:10,paddingLeft:10}}>
              <Text style={{ fontSize: 15,  fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{  fontSize: 15 }} >Highlights#Baba Digitals</Text>
              <Text style={{ }}> 1.2k views. 1 year ago</Text>
              <Text style={{  color: '#D1D5D7' }} >Video - 04:30 mins remaining</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Avatar.Text size={25} label="74%"
                style={{ }} />
            </View>
          </View>
  
        </View>
  

        );
      })}

               </View>
    </ScrollView>
  );
}

