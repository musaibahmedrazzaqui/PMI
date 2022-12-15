/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigationComponent from './NavigationComponent';

import {PermissionsAndroid} from 'react-native';

const NavigationScreen = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const lat = parseFloat(route.params.lat);
  const long = parseFloat(route.params.long);
  const currLat = parseFloat(route.params.currLat);
  const currLong = parseFloat(route.params.currLong);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    height: '50%',
  };

  useEffect(() => {
    const rLkSb2QhQHgNc7ymoBQhFNy7N2Sz4FMD4c = async () => {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
          },
        );
      } catch (err) {
        console.warn(err);
      }
    };

    rLkSb2QhQHgNc7ymoBQhFNy7N2Sz4FMD4c();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableOpacity
        onPress={() => Navigation.navigate('HomeScreen')}
        style={{position: 'absolute', top: -50, left: -30}}>
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={require('../assets/back.png')}
        />
      </TouchableOpacity>
      <NavigationComponent
        origin={[currLong, currLat]}
        destination={[long, lat]}
      />
      {/* {console.log(currLongitude + ',' + currLatitude)} */}
    </SafeAreaView>
  );
};

export default NavigationScreen;
