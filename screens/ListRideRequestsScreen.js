import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const availableRides = [
  {
    id: 1,
    name: 'John Doe',
    car: 'Honda Civic',
    location: '67.1003706246515, 24.945828086771098 ',
  },
  {
    id: 2,
    name: 'Jane Doe',
    car: 'Toyota Camry',
    location: '67.1003706246515, 24.945828086771098',
  },
  {
    id: 3,
    name: 'Musaib ahmed Razzaqui',
    car: 'Ford Fusion',
    location: '67.1003706246515, 24.945828086771098',
  },
  {
    id: 4,
    name: 'Faizan Mukhtar',
    car: 'Chevrolet Cruze',
    location: '67.1003706246515, 24.945828086771098',
  },
  {
    id: 5,
    name: 'Affan ul Haq',
    car: 'Suzuki FX',
    location: '67.1003706246515, 24.945828086771098',
  },
];

const ListRideRequestsScreen = () => {
  const [rides, setRides] = useState(availableRides);
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
                {getLocation(rides[item.id - 1])}
                <Card.Content>
                  <Title>Pickup from {item.name}</Title>
                  <Text>Fare willing to pay {item.car}</Text>
                </Card.Content>
                {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
                <Card.Actions>
                  <Button>Accept</Button>
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
