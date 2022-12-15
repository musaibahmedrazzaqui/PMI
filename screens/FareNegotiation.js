import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {theme} from '../core/theme';
import Background from '../components/Background';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function FareNegotiation({navigation, route}) {
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
          Musaib ahmed
        </Text>
        {/* {getLocation(rides[item.id - 1])} */}
        <Card.Content>
          <Title>Pickup from</Title>
          <Text>Fare willing to pay {route.params.fare} Rupees</Text>
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
              // navigation.navigate({
              //   name: 'NavigationScreen',
              //   params: {
              //     long: item.long,
              //     lat: item.lat,
              //     currLong: longitude,
              //     currLat: latitude,
              //   },
              // });
            }}>
            Accept
          </Button>
          <Button style={{color: 'red'}}>Reject</Button>
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
