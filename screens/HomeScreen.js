import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

import NavOptions from '../components/NavOptions';
import SecondNavOptions from '../components/SecondNavOptions';
import IncomingRide from '../components/IncomingRide';
import {Icon} from 'react-native-elements';

import ReferOptions from '../components/ReferOptions';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function HomeScreen({navigation, route}) {
  const Navigation = useNavigation();
  const [check, setCheck] = useState(false);
  const [checkone, setCheckone] = useState(false);
  const [userID, setUserID] = useState('');
  const [did, setdId] = useState();
  useEffect(() => {
    setUserID(route.params?.userid);
    axios
      .get(`http://10.0.2.2:3002/driver/${route.params?.userid}`)
      .then(res => {
        console.log('userid', userID);
        const response = res.data.error;

        console.log(response);
        if (response == 0) {
          console.log('driverid' + res.data.data[0].DriverID);
          setdId(res.data.data[0].DriverID);
          let drid = res.data.data[0].DriverID;
          setCheck(true);
          axios.get(`http://10.0.2.2:3002/rides/${drid}`).then(res => {
            console.log('DID ', drid);
            const response = res.data.error;
            if (response == 0) {
              setCheckone(true);
            } else {
              setCheckone(false);
            }
          });
        } else {
          setdId(0);
          setCheck(false);
        }
      });

    // console.log(route.params?.userid);
  }, []);
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
          {console.log(userID)}
          <NavOptions uid={userID} />
          {checkone === true && <IncomingRide />}
          {/* //Check if driver is registered only then show this component */}

          {check === false && <SecondNavOptions uid={userID} />}

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
