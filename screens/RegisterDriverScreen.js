import React, {useState} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import UUIDGenerator from 'react-native-uuid-generator';
import Background from '../components/Background';

import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';

export default function FoodScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [cnic, setCnic] = useState({value: '', error: ''});
  const [license, setLicense] = useState({value: '', error: ''});
  const [driverid, setDriverid] = useState('');
  useEffect(() => {
    UUIDGenerator.getRandomUUID().then(uuid => {
      setDriverid(uuid);
    });
  }, []);
  const onSavePressed = () => {
    //Validate email Id through call at users table
    //Driver ID == CNIC + email
    // let uuid = "";
    alert('Thankyou for registering as a Driver!');
    console.log(driverid);
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeScreen'}],
    });
  };
  const onToPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'ToScreen'}],
    });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Register your vehicle </Header>

      <TextInput
        label="Enter registered email ID"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
      />
      <TextInput
        label="Enter CNIC Number"
        returnKeyType="done"
        value={cnic.value}
        onChangeText={text => setCnic({value: text, error: ''})}
      />
      <TextInput
        label="Enter License Number"
        returnKeyType="done"
        value={license.value}
        onChangeText={text => setLicense({value: text, error: ''})}
      />

      <Button mode="contained" onPress={onSavePressed}>
        Save
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
    paddingBottom: 8,
  },
  container_touchable: {
    borderWidth: 1,
    width: 290,
    borderLeftColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description_two: {
    fontSize: 16,
    color: theme.colors.secondary,
    paddingTop: 8,
    paddingBottom: 8,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
