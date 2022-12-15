// import React from 'react';
// import {Icon, ScreenContainer, Touchable, withTheme} from '@draftbit/ui';
// import {useNavigation} from '@react-navigation/native';
// import {
//   FlatList,
//   Image,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
// } from 'react-native';
// import {Fetch} from 'react-request';
// const AvailableRidesScreen = props => {
//   const Navigation = useNavigation();
//   const {theme} = props;
//   return (
//     <ScreenContainer hasSafeArea={true} scrollable={true}>
//       <View
//         style={styles.Viewfd}
//         accessible={true}
//         importantForAccessibility="auto"
//         hitSlop={{}}
//         pointerEvents="auto">
//         <TouchableOpacity
//           onPress={() => Navigation.navigate('HomeScreen')}
//           style={{position: 'absolute', top: 10, left: 0}}>
//           <Image
//             style={{
//               height: 20,
//               width: 20,
//             }}
//             source={require('../assets/back.png')}
//           />
//         </TouchableOpacity>
//         <Text
//           style={StyleSheet.flatten([
//             styles.Text_2S,
//             theme.typography.headline4,
//             {color: theme.colors.strong},
//           ])}>
//           Available Rides to your Institution
//         </Text>
//       </View>
//       <ScrollView
//         contentContainerStyle={styles.ScrollViewoi}
//         showsHorizontalScrollIndicator={true}
//         showsVerticalScrollIndicator={true}
//         bounces={true}>
//         <Fetch
//           url={`https://example-data.draftbit.com/authors?_limit=10`}
//           headers={{
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           }}>
//           {({loading, error, data, refetch}) => {
//             if (loading) {
//               return null;
//             }
//             if (error) {
//               return null;
//             }
//             if (!data) {
//               return null;
//             }
//             return (
//               <TouchableOpacity>
//                 <FlatList
//                   renderItem={({item}) => (
//                     <View
//                       style={StyleSheet.flatten([
//                         styles.Viewjf,
//                         {
//                           backgroundColor: theme.colors.surface,
//                           borderRadius: theme.borderRadius.global,
//                         },
//                       ])}
//                       accessible={true}
//                       importantForAccessibility="auto"
//                       hitSlop={{}}
//                       pointerEvents="auto">
//                       <View
//                         style={StyleSheet.flatten([
//                           styles.ViewTJ,
//                           {borderRadius: theme.borderRadius.button},
//                         ])}
//                         accessible={true}
//                         importantForAccessibility="auto"
//                         hitSlop={{}}
//                         pointerEvents="auto">
//                         <ImageBackground
//                           style={styles.ImageBackgroundwJ}
//                           resizeMode="cover"
//                           source={{uri: item['imgUrl']}}
//                         />
//                       </View>
//                       <View
//                         style={styles.View_6N}
//                         accessible={true}
//                         importantForAccessibility="auto"
//                         hitSlop={{}}
//                         pointerEvents="auto">
//                         <View
//                           accessible={true}
//                           importantForAccessibility="auto"
//                           hitSlop={{}}
//                           pointerEvents="auto">
//                           <Text
//                             style={StyleSheet.flatten([
//                               styles.TexttW,
//                               theme.typography.custom51,
//                             ])}
//                             adjustsFontSizeToFit={false}
//                             numberOfLines={2}>
//                             {item && item['person']}
//                           </Text>
//                           <Text style={{color: theme.colors.strong}}>
//                             Travelling From: Travelling To: Fare Requested:
//                           </Text>
//                         </View>
//                         <Touchable style={styles.TouchableoS}>
//                           <View
//                             style={styles.ViewTh}
//                             accessible={true}
//                             importantForAccessibility="auto"
//                             hitSlop={{}}
//                             pointerEvents="auto">
//                             <Icon
//                               color={theme.colors.strong}
//                               size={24}
//                               name="FontAwesome/user-circle"
//                             />
//                           </View>
//                         </Touchable>
//                       </View>
//                     </View>
//                   )}
//                   numColumns={1}
//                   data={data}
//                 />
//               </TouchableOpacity>
//             );
//           }}
//         </Fetch>
//       </ScrollView>
//     </ScreenContainer>
//   );
// };
// const styles = StyleSheet.create({
//   Viewjf: {
//     flexDirection: 'row',
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingLeft: 8,
//     paddingRight: 8,
//     marginTop: 16,
//   },
//   Viewfd: {
//     marginTop: 20,
//     marginBottom: 20,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   ViewTJ: {
//     width: 140,
//     height: 140,
//     overflow: 'hidden',
//   },
//   ViewTh: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 60,
//   },
//   TexttW: {
//     width: '100%',
//     textAlign: 'left',
//     marginBottom: 4,
//   },
//   ImageBackgroundwJ: {
//     width: 140,
//     height: 140,
//   },
//   Text_2S: {
//     textAlign: 'center',
//   },
//   ScrollViewoi: {
//     marginLeft: 16,
//     marginRight: 16,
//   },
//   View_6N: {
//     alignSelf: 'flex-start',
//     justifyContent: 'space-between',
//     flexGrow: 1,
//     flexShrink: 1,
//     marginLeft: 16,
//   },
//   TouchableoS: {
//     paddingTop: 8,
//     paddingRight: 16,
//     paddingBottom: 8,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });
// export default withTheme(AvailableRidesScreen);
import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import RNRestart from 'react-native-restart';

// import FareNegotiation from './FareNegotiation';

const availableRides = [
  {
    id: 1,
    name: 'John Doe',
    fare: 'Honda Civic',
    long: '67.1003706246515',
    lat: '24.945828086771098',
    show: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    fare: 'Toyota Camry',
    long: '67.1003706246515',
    lat: '24.945828086771098',
    show: false,
  },
  {
    id: 3,
    name: 'Musaib ahmed Razzaqui',
    fare: 'Ford Fusion',
    long: '67.1003706246515',
    lat: '24.945828086771098',
    show: false,
  },
  {
    id: 4,
    name: 'Faizan Mukhtar',
    fare: 'Chevrolet Cruze',
    long: '67.1003706246515',
    lat: '24.945828086771098',
    show: false,
  },
  {
    id: 5,
    name: 'Affan ul Haq',
    fare: 'Suzuki FX',
    long: '67.1003706246515',
    lat: '24.945828086771098',
    show: false,
  },
];

const AvailableRidesScreen = ({navigation, route}) => {
  const [rides, setRides] = useState(availableRides);
  const [show, setShow] = useState(false);
  const [latitude, setlatitude] = React.useState('0.0');
  const [longitude, setlongitude] = React.useState('0.0');
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setlatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  }, []);
  const getLocation = async data => {
    console.log(data.id);
    // const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.location}.json?types=place%2Cpostcode%2Caddress&limit=1&access_token=pk.eyJ1IjoibXVzYWliYWhtZWRyYXp6YXF1aSIsImEiOiJjbGFud3ZlemEwMGRiM25sc2dlbW1vMmRxIn0.426C1RaWyDpDv9XJ8Odigg`;
    // const response = await fetch(endpoint);
    // //console.log(endpoint);
    // const results = await response.json();
    // console.log(results);
  };
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <FlatList
        data={rides}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 10}}>
            <TouchableOpacity>
              <Card>
                <Text
                  style={{
                    fontSize: 25,
                    marginLeft: 18,
                    marginTop: 20,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                {/* {getLocation(rides[item.id - 1])} */}
                <Card.Content>
                  <Title>Pickup from {item.name}</Title>
                  <Text>Fare willing to pay {item.fare} Rupees</Text>
                </Card.Content>
                {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
                <Card.Actions>
                  <Button
                    onPress={() => {
                      navigation.navigate({
                        name: 'FareNegotiation',
                        params: {
                          fare: item.fare,
                        },
                      });
                    }}>
                    Negotiate Fare
                  </Button>
                  <Button style={{fontSize: '12'}}>Request ride</Button>
                </Card.Actions>
              </Card>
            </TouchableOpacity>
          </View>
        )}
      />
    </Background>
  );
};
//  import { View, Text } from 'react-native'
//  import React from 'react'

//  const ListRideRequestsScreen = () => {
//    return (
//      <View>
//        <Text>ListRideRequestsScreen</Text>
//      </View>
//    )
//  }

export default AvailableRidesScreen;
