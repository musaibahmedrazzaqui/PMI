import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
import logo from '../assets/poollogo.png';
import NavOptions from '../components/NavOptions';
import {Icon} from 'react-native-elements';

// Google Places
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {selectDestination, setDestination, setOrigin} from '../slices/navSlice';
import LocationOptions from '../components/LocationOptions';
import ReferOptions from '../components/ReferOptions';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const Navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <View style={[styles.logoContainer, tw`mx-2 my-3 pt-1`]}>
            <Icon
              name="account-circle"
              style={tw` w-3`}
              color={'gray'}
              type="material"
              size={35}
              onPress={() => Navigation.navigate('SettingsScreen')}
            />
            <Text style={tw`text-2xl font-bold`}>Pool Me In</Text>
            <Icon
              name="logout"
              style={tw` w-9`}
              color={'gray'}
              type="material"
              size={35}
              onPress={() => Navigation.navigate('StartScreen')}
            />
          </View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 14,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 8,
              },
            }}
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            fetchDetails={true}
            // enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: 'AIzaSyC0pi36NCYygUaAbn3wQrrmjtairvWDxGY',
              language: 'en',
            }}
            placeholder="Where are you now?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
          />
          <NavOptions />
          <LocationOptions />
          <ReferOptions />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
