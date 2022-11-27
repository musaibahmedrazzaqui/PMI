import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
// import { Dropdown } from "react-native-material-dropdown";
import {SelectList} from 'react-native-dropdown-select-list';

export default function FoodScreen({navigation}) {
  const [from, setFrom] = useState({value: '', error: ''});
  const [to, setTo] = useState({value: '', error: ''});
  const [fare, setFare] = useState({value: '', error: ''});
  const [selected, setSelected] = React.useState('');
  let carData = [
    {
      value: 'Suzuki Alto',
    },
    {
      value: 'Toyota Corolla',
    },
    {
      value: 'Suzuki Wagon R',
    },
  ];
  const onFromPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'FromScreen'}],
    });
  };
  const onToPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'ToScreen'}],
    });
  };
  const onLoginPressed = () => {
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeScreen'}],
    });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Where are you travelling to?</Header>
      <TouchableOpacity onPress={onFromPressed}>
        <View style={styles.container_touchable} margin="2%">
          <Text style={styles.description_two}>From where?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onToPressed}>
        <View style={styles.container_touchable} margin="5%">
          <Text style={styles.description_two}>To where?</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.description}>Which vehicle will you take today?</Text>
      <SelectList
        style={{minWidth: '15rem'}}
        search="false"
        setSelected={val => setSelected(val)}
        data={carData}
        save="value"
      />
      <TextInput
        label="Expected fare per seat"
        returnKeyType="done"
        value={fare.value}
        onChangeText={text => setFare({value: text, error: ''})}
      />

      <Button mode="contained" onPress={onLoginPressed}>
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
