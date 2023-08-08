import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/Details';
import CartScreen from '../screens/Cart';
import {Button} from 'react-native';
import {ItemData} from '../store/products/mock';

export type CartStackParamList = {
  CartScreen: undefined;
  Details: {item: ItemData};
};
const CartStack = createNativeStackNavigator<CartStackParamList>();
const rightButton = (navigation: any) => {
  return (
    <Button
      onPress={() => navigation.goBack(null)}
      title="close"
      color="#2a74eb"
    />
  );
};
const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="CartScreen" component={CartScreen} />
      <CartStack.Group
        screenOptions={({navigation}) => ({
          presentation: 'modal',
          headerRight: () => rightButton(navigation),
        })}>
        <CartStack.Screen name="Details" component={DetailsScreen} />
      </CartStack.Group>
    </CartStack.Navigator>
  );
};
export default CartStackScreen;
