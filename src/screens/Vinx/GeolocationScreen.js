import React, { useState, useEffect } from 'react';
import {
	View,
	Image,
	Text,
	TextInput,
	Alert,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
	ActivityIndicator,
	StyleSheet,
	Switch,
	Dimensions,
  
  
} from 'react-native';
import { Button,BottomSheet } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Entypo from 'react-native-vector-icons/Entypo';
// import Calloutfunction from '../components/Calloutfunction';
const { width, height } = Dimensions.get('window');

const Markers = {
	markers: [
		{
			title: 'secendrabad ',
			description: 'hello hi',

			coordinates: {
				latitude: 17.538247353683182,
				longitude: 78.52328344797883
			}
			// image: require('../../assets/men.jpg'),
		}
		// {
		//   title: 'kukatpally',
		//   coordinates: {
		//     latitude: 17.34139784193414,
		//     longitude: 78.48702090133686,
		//   },
		//   image: require('../../assets/img12.jpg'),
		// },
	]
};

const initialState = {
	latitude: null,
	longitude: null,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};

function GeolocationScreen({ navigation }) {
   const [ currentPosition, setCurrentPosition ] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);


	useEffect(() => {
		Geolocation.getCurrentPosition(
			(position) => {
				const { longitude, latitude } = position.coords;
				setCurrentPosition({
					...currentPosition,
					latitude,
					longitude
				});
			},
			(error) => alert(error.message),
			{ timeout: 20000, maximumAge: 1000 }
		);
	}, []);

	const [ isEnabled, setIsEnabled ] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	
	return (
		<View style={{ flex: 1 }}> 
			

			{currentPosition.latitude ? (
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ flex: 1 }}
					showsUserLocation
					initialRegion={currentPosition}
				>
					{Markers.markers.map((marker, index) => (
						<View key={index}>
							<Marker coordinate={currentPosition} title={'tarnaka'} />
							<Marker
								coordinate={marker.coordinates}
								title={marker.title}
								description={marker.description}
							>
								
							</Marker>
						</View>
					))}

					
				</MapView>
			) : (
				<ActivityIndicator />
			)}
		</View>
	);
}

export default GeolocationScreen;