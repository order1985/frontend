import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import PersonalScreen from '../screens/PersonalScreen';
import WebScreen from '../screens/WebScreen';

export default HomeNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },

        Market: {
            screen: MarketScreen
        },

        Web: {
            screen: WebScreen
        },

        Personal: {
            screen: PersonalScreen
        },
    },
    {
    initialRouteName: 'Home',
    
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);