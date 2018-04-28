import React from 'react';
import { Text, View } from 'react-native';

export default class PersonalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Personal!</Text>
      </View>
    );
  }
}