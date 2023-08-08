import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import {Button} from 'react-native';
import {ItemData} from '../store/products/mock';

export type HomeStackParamList = {
  HomeScreen: undefined;
  Details: {item: ItemData};
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const rightButton = (navigation: any) => {
  return (
    <Button
      onPress={() => navigation.goBack(null)}
      title="close"
      color="#2a74eb"
    />
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Group
        screenOptions={({navigation}) => ({
          presentation: 'modal',
          headerRight: () => rightButton(navigation),
        })}>
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
