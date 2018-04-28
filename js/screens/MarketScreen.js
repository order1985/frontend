import React from 'react';
import { Text, View } from 'react-native';

export default class MarketScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Market!</Text>
      </View>
    );
  }
}