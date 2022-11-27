import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import LocationButton from '../components/LocationButton';
import axios from 'axios';
// import BackButton from '../components/BackButton';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXVzYWliYWhtZWRyYXp6YXF1aSIsImEiOiJjbGFud3ZlemEwMGRiM25sc2dlbW1vMmRxIn0.426C1RaWyDpDv9XJ8Odigg',
);

const FromScreen = () => {
  const [latitude, setlatitude] = React.useState('0.0');
  const [longitude, setlongitude] = React.useState('0.0');
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setlatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  }, []);

  const [text, onChangeText] = useState('');

  const coordinate = [longitude, latitude];
  const onButtonPressed = () => {
    //console.log(text);
    const sLower = text.toLowerCase();
    console.log(sLower);
    let srcCoord = null;
    srcCoord = getCoordinates(sLower);

    console.log(latitude);
  };
  const onUserLocationUpdate = async location => {
    //console.log(location)
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    setlatitude(lat);
    setlongitude(long);
  };

  const getCoordinates = async name => {
    // code to get coordinates by making API calls to mapbox endpoint

    const req =
      'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
      name +
      '.json?bbox=66.747436523,24.639527881,67.473907471,25.111714983&access_token=pk.eyJ1IjoibXVzYWliYWhtZWRyYXp6YXF1aSIsImEiOiJjbGFud3ZlemEwMGRiM25sc2dlbW1vMmRxIn0.426C1RaWyDpDv9XJ8Odigg';

    console.log(req);

    let coord = null;
    let res = null;

    // axios.get
    try {
      res = await axios.get(req);
      //console.log(await res);
    } catch (e) {
      console.log(e); // eslint-disable-line
    }

    if (res == null) {
      return;
    }

    const place = await res.data;
    console.log(place);
    if (!place.features.length) {
      // check whether the coordinates are returned for the Place
      console.log('features : ' + place.features);
      return;
    }

    const latLng = place.features[0].geometry.coordinates;
    setlatitude(latLng[1]);
    setlongitude(latLng[0]);
    coord = {lat: latLng[1], lng: latLng[0]};
    console.log(coord);
    return coord;
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter location"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <MapboxGL.MapView style={styles.map} zoomEnabled logoEnabled={false}>
          {/* <MapboxGL.UserLocation
            visible={true}
            onUpdate={onUserLocationUpdate}
          /> */}

          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[longitude, latitude]}
          />
          {/* <MapboxGL.MarkerView id={1} coordinates={[longitude, latitude]}>
            <View>
              <Text>sdsadsasdssssddsa</Text>
            </View>
          </MapboxGL.MarkerView> */}
        </MapboxGL.MapView>
        <LocationButton mode="contained" onPress={onButtonPressed}>
          Save
        </LocationButton>
      </View>
    </View>
  );
};

export default FromScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    marginLeft: 125,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 300,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 700,
    width: 600,
  },
  map: {
    flex: 1,
  },
});

export async function hasLocationPermission() {
  if (
    Platform.OS === 'web' ||
    Platform.OS === 'ios' ||
    (Platform.OS === 'android' && Platform.Version < 23)
  ) {
    return true;
  }
  const isGranted = await MapboxGL.requestAndroidLocationPermissions();

  return isGranted;
}
