import React from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/index';
import TabNavigator from './TabNavigator';
import SwitchNavigator from './SwitchNavigator';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SwitchNavigator/>
            </Provider>
        )
    }
}