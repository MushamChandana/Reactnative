import React from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Geolocation from '@react-native-community/geolocation';
import { Marker } from 'react-native-maps';

// const Geolocations = () => {
//   return (
//     <View>
//       <MapView
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//   )
// }
// export default Geolocations


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '80%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
  maps: () => {
    <MaterialCommunityIcons name="menu" size={30} color="red" />

  }
 });
 
function Geolocations ()  {
  return(
   <View style={styles.container}>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        
        style={styles.map}
        style={styles.maps}
        
        initialRegion= {{
          latitude: 22.62938671242907,
          longitude: 88.4354486029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }}
    >

 
     
      </MapView>
    </View>
 );
      }
      export default Geolocations;
