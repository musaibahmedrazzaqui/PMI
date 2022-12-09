import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native';
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
  const [vehicle, setVehicle] = useState({value: '', error: ''});
  const [engine, setEngine] = useState({value: '', error: ''});
  const [province, setProvince] = useState({value: '', error: ''});
  const [owner, setOwner] = useState({value: '', error: ''});
  const [manufacturer, setManufacturer] = useState({value: '', error: ''});
  const [model, setModel] = useState({value: '', error: ''});
  const [year, setYear] = useState({value: '', error: ''});
  const [enginecc, setEnginecc] = useState({value: '', error: ''});
  const onSavePressed = () => {
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
    <ScrollView>
      <Background>
        <BackButton goBack={navigation.goBack} />
        {/* <Logo /> */}
        <Header>Register your vehicle </Header>

        <TextInput
          label="Enter Vehicle Number"
          returnKeyType="done"
          value={vehicle.value}
          onChangeText={text => setVehicle({value: text, error: ''})}
        />
        <TextInput
          label="Enter Engine Number"
          returnKeyType="done"
          value={engine.value}
          onChangeText={text => setEngine({value: text, error: ''})}
        />
        <TextInput
          label="Enter Registration Province"
          returnKeyType="done"
          value={province.value}
          onChangeText={text => setProvince({value: text, error: ''})}
        />
        <TextInput
          label="Enter Owner Name"
          returnKeyType="done"
          value={owner.value}
          onChangeText={text => setOwner({value: text, error: ''})}
        />
        <TextInput
          label="Enter Manufacturer Name (e.g Suzuki, Honda, KIA)"
          returnKeyType="done"
          value={manufacturer.value}
          onChangeText={text => setManufacturer({value: text, error: ''})}
        />
        <TextInput
          label="Enter car name (e.g City 1.6, Civic 1.8)"
          returnKeyType="done"
          value={model.value}
          onChangeText={text => setModel({value: text, error: ''})}
        />
        <TextInput
          label="Enter Year Manufacured"
          returnKeyType="done"
          value={year.value}
          onChangeText={text => setYear({value: text, error: ''})}
        />
        <TextInput
          label="Enter Engine Horse Power"
          returnKeyType="done"
          value={enginecc.value}
          onChangeText={text => setEnginecc({value: text, error: ''})}
        />

        <Button mode="contained" onPress={onSavePressed}>
          Save
        </Button>
      </Background>
    </ScrollView>
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
