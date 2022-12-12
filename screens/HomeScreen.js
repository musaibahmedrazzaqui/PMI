import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

import NavOptions from '../components/NavOptions';
import SecondNavOptions from '../components/SecondNavOptions';
import IncomingRide from '../components/IncomingRide';
import {Icon} from 'react-native-elements';

import ReferOptions from '../components/ReferOptions';

import {useNavigation} from '@react-navigation/native';

function HomeScreen({navigation, route}) {
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

          <NavOptions />
          {route.params?.post && <IncomingRide />}
          {/* //Check if driver is registered only then show this component */}
          <SecondNavOptions />

          <ReferOptions />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
