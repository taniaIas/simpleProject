import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/images/home';
import HomePressedIcon from '../assets/images/homeFocused';
import CartIcon from '../assets/images/cart';
import CartPressedIcon from '../assets/images/cartFocused';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackScreen from './HomeNavigation';
import CartStackScreen from './CartNavigation';

export type TabStackParamList = {
  Home: undefined;
  Cart: undefined;
};

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator<TabStackParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon: React.ReactNode;

            if (route.name === 'Home') {
              icon = focused ? (
                <HomeIcon width={size} height={size} fill={color} />
              ) : (
                <HomePressedIcon width={size} height={size} fill={color} />
              );
            } else if (route.name === 'Cart') {
              icon = focused ? (
                <CartIcon width={size} height={size} fill={color} />
              ) : (
                <CartPressedIcon width={size} height={size} fill={color} />
              );
            }
            return icon;
          },
          tabBarActiveTintColor: '#2a74eb',
          tabBarInactiveTintColor: '#7d7e80',
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Cart" component={CartStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
