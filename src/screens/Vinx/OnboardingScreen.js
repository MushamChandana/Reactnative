import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({navigation}) => {
    return (
   
  
     <Onboarding
     SkipButtonComponent={Skip}
     NextButtonComponent={Next}
     DoneButtonComponent={Done}
     DotComponent={Dots}
     onSkip={() => navigation.replace("Permissions")}
     onDone={() => navigation.navigate("Permissions")}
  pages={[
    {
      backgroundColor: '#8D8993',
      image: <Image source={require('../../assets/rapido-1.jpg')}
      style={styles.picture} />,
      title: ' Convenient Rides',
      subtitle: 'Across 100+cities in india',
    
    },
    {
        backgroundColor: '#8D8993',
        image: <Image source={require('../../assets/rapido-2.jpg')}
        style={styles.picture} 
        />,
        title: 'Safety all along',
        subtitle: '2 Cr+ safe rides beating the traffic',
      },
      {
        backgroundColor: '#8D8993',
        image: <Image source={require('../../assets/rapido-3.png')}
        style={styles.picture} />,
        title: 'Hygienic',
        subtitle: 'Our captains follows best hygienic practices',
      },
      {
        backgroundColor: '#8D8993',
        image: <Image source={require('../../assets/rapido-04.jpg')}
        style={styles.picture} />,
        title: 'Other services',
        subtitle: 'we have parcel deliveries,auto and more...',
      },
  ]}
/>

    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
    picture:{
        width:'90%',
     marginHorizontal:10,
        borderRadius:50
    },
 

    
  });