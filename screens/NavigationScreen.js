/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
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
      <NavigationComponent
        origin={[currLong, currLat]}
        destination={[long, lat]}
      />
      {/* {console.log(currLongitude + ',' + currLatitude)} */}
    </SafeAreaView>
  );
};

export default NavigationScreen;
