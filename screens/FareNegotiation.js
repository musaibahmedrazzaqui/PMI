import React, {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {theme} from '../core/theme';
import Background from '../components/Background';

import TextInput from '../components/TextInput';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import axios from 'axios';

export default function FareNegotiation({navigation, route}) {
  console.log(route.params.rides);
  const [fare, setFare] = useState({value: '', error: ''});
  const [location, setLocation] = useState();
  useEffect(() => {
    getCoordinates(route.params.latitude, route.params.longitude);
  }, []);
  const getCoordinates = async (latitude, longitude) => {
    // code to get coordinates by making API calls to mapbox endpoint

    const req =
      'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
      longitude +
      ',' +
      latitude +
      '.json?bbox=66.747436523,24.639527881,67.473907471,25.111714983&access_token=pk.eyJ1IjoiZmFpemFubXVraHRhcjEiLCJhIjoiY2xjZW5obmpqMzY5ZTN3dDg3NGtpcGZrciJ9.OOU211_NDTEI4g0IL0_Izw';

    // console.log('req', req);

    let coord = null;
    let res = null;

    // axios.get
    try {
      // console.log('before axiosos');
      res = await axios.get(req);
      //console.log(await res);
    } catch (e) {
      console.log(e); // eslint-disable-line
    }

    if (res == null) {
      return;
    }

    const place = await res.data;
    // console.log('place', place.features[0].place_name);
    if (!place.features.length) {
      // check whether the coordinates are returned for the Place
      console.log('features : ' + place.features[0].geometry);
      return;
    }
    setLocation(place.features[0].place_name);
    // setPlace(place.features[0].place_name);
    // coord = {lat: latLng[1], lng: latLng[0]};
    // console.log('coord', coord);
    // console.log('places' + textTwo);
  };
  return (
    <Background>
      {/* <Logo /> */}
      <Text style={styles.header}>Let's Start Your Ride!</Text>
      <Paragraph>
        Negotiate Fare here. Click on Request Ride to send request to driver...
      </Paragraph>
      <Card>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 18,
            marginTop: 20,
            color: 'black',
          }}>
          Driver: {route.params.rides.firstName} {route.params.rides.lastName}
        </Text>
        {/* {getLocation(rides[item.id - 1])} */}
        <Card.Content>
          <Title>Going to {route.params.rides.to_location.slice(0, 28)}</Title>
          <Text>Fare Requested {route.params.rides.fareEntered} Rupees</Text>
          <TextInput
            label="Enter your fare & wait for driver to accept request"
            returnKeyType="done"
            value={fare.value}
            onChangeText={text => setFare({value: text, error: ''})}
          />
        </Card.Content>
        {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
        <Card.Actions>
          <Button
            onPress={() => {
              axios
                .post('http://10.0.2.2:3002/rides/addnegotiation', {
                  driverFare: route.params.rides.fareEntered,
                  userFare: fare.value,
                  finalFare: 0,
                  rideID: route.params.rides.RideID,
                  userLatitude: route.params.latitude,
                  userLongitude: route.params.longitude,
                  location: location,
                  userID: route.params.userid,
                })
                .then(() => {
                  alert('Request Sent!');
                  navigation.navigate({
                    name: 'AvailableRidesScreen',
                  });
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}>
            Send request
          </Button>
          <Button style={{color: 'red'}}></Button>
        </Card.Actions>
      </Card>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingTop: 460,
    paddingVertical: 12,
  },
});
