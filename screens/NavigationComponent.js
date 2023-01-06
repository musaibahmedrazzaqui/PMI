/* eslint-disable comma-dangle */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Image, TouchableOpacity} from 'react-native';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const Navigation = props => {
  const {origin, destination} = props;
  const Navigat = useNavigation();
  const addornot = () => {
    return (
      <View>
        <Text>
          Do you want to add the person sitting with you as a connection or not?
          This can not be undone
        </Text>
        <Button onPress={Navigat.navigate('HomeScreen')}>Yes</Button>
        <Button onPress={Navigat.navigate('HomeScreen')}>No</Button>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Navigat.navigate('HomeScreen')}
        style={{position: 'absolute', top: -50, left: -30}}>
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={require('../assets/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        {console.log(origin)}
        <MapboxNavigation
          showsEndOfRouteFeedback={true}
          shouldSimulateRoute={true}
          origin={origin}
          destination={destination}
          showsEndOfRouteFeedback={false}
          hideStatusView
          onLocationChange={event => {
            console.log('onLocationChange', event.nativeEvent);
          }}
          onRouteProgressChange={event => {
            console.log('onRouteProgressChange', event.nativeEvent);
          }}
          onError={event => {
            const {message} = event.nativeEvent;
            // eslint-disable-next-line no-alert
            alert(message);
          }}
          onArrive={() => {
            // eslint-disable-next-line no-alert

            alert('You have reached your destination');
            addornot();
          }}
          onCancelNavigation={event => {
            alert('Cancelled navigation event');
            Navigat.navigate('ListRideRequestsScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  mapContainer: {
    flex: 1,
  },
});

export default Navigation;
