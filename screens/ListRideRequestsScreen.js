import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';

const availableRides = [
  {
    id: 1,
    name: 'John Doe',
    fare: 'Honda Civic',
    long: '67.1003706246515',
    lat: '24.945828086771098',
  },
  {
    id: 2,
    name: 'Jane Doe',
    fare: 'Toyota Camry',
    long: '67.1003706246515',
    lat: '24.945828086771098',
  },
  {
    id: 3,
    name: 'Musaib ahmed Razzaqui',
    fare: 'Ford Fusion',
    long: '67.1003706246515',
    lat: '24.945828086771098',
  },
  {
    id: 4,
    name: 'Faizan Mukhtar',
    fare: 'Chevrolet Cruze',
    long: '67.1003706246515',
    lat: '24.945828086771098',
  },
  {
    id: 5,
    name: 'Affan ul Haq',
    fare: 'Suzuki FX',
    long: '67.1003706246515',
    lat: '24.945828086771098',
  },
];

const ListRideRequestsScreen = ({navigation, route}) => {
  const [rides, setRides] = useState(availableRides);
  const [latitude, setlatitude] = React.useState('0.0');
  const [longitude, setlongitude] = React.useState('0.0');
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setlatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  }, []);
  const getLocation = async data => {
    console.log(data.id);
    // const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.location}.json?types=place%2Cpostcode%2Caddress&limit=1&access_token=pk.eyJ1IjoibXVzYWliYWhtZWRyYXp6YXF1aSIsImEiOiJjbGFud3ZlemEwMGRiM25sc2dlbW1vMmRxIn0.426C1RaWyDpDv9XJ8Odigg`;
    // const response = await fetch(endpoint);
    // //console.log(endpoint);
    // const results = await response.json();
    // console.log(results);
  };
  return (
    <View>
      <FlatList
        data={rides}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 10}}>
            <TouchableOpacity>
              <Card>
                <Text
                  style={{
                    fontSize: 25,
                    marginLeft: 18,
                    marginTop: 20,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                {/* {getLocation(rides[item.id - 1])} */}
                <Card.Content>
                  <Title>Pickup from {item.name}</Title>
                  <Text>Fare willing to pay {item.fare} Rupees</Text>
                </Card.Content>
                {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
                <Card.Actions>
                  <Button
                    onPress={() => {
                      // if (emailError || passwordError) {
                      //   setEmail({ ...email, error: emailError });
                      //   setPassword({ ...password, error: passwordError });
                      //   return;
                      // }
                      // setFrom('true');

                      navigation.navigate({
                        name: 'NavigationScreen',
                        params: {
                          long: item.long,
                          lat: item.lat,
                          currLong: longitude,
                          currLat: latitude,
                        },
                      });
                    }}>
                    Accept
                  </Button>
                  <Button style={{color: 'red'}}>Reject</Button>
                </Card.Actions>
              </Card>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
//  import { View, Text } from 'react-native'
//  import React from 'react'

//  const ListRideRequestsScreen = () => {
//    return (
//      <View>
//        <Text>ListRideRequestsScreen</Text>
//      </View>
//    )
//  }

export default ListRideRequestsScreen;
