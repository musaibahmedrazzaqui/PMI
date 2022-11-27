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

const ToScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

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
        origin={[67.11371729659392, 24.95088649615777]}
        destination={[67.10380385210678, 24.936450024471096]}
      />
    </SafeAreaView>
  );
};

export default ToScreen;
