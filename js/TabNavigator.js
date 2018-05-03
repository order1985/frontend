import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation'; 
import {Provider} from 'react-redux';

import HomeNavigator from './navigators/HomeNavigator';

// import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import MarketScreen from './screens/MarketScreen';
import CompanyScreen from './screens/CompanyScreen';
import PersonalScreen from './screens/PersonalScreen';
import {store} from './store/index';

export default TabNavigator(
  {
    Home: { screen: HomeNavigator },
    Product: { screen: ProductScreen },
    Market: { screen: MarketScreen },
    Company: { screen: CompanyScreen },
    Personal: { screen: PersonalScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Product') {
          iconName = `ios-appstore${focused ? '' : '-outline'}`;
        } else if (routeName === 'Market') {
          iconName = `ios-basketball${focused ? '' : '-outline'}`;
        } else if (routeName === 'Company') {
          iconName = `ios-compass${focused ? '' : '-outline'}`;
        } else if (routeName === 'Personal') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);