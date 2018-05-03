import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import SignInWallpaper from '../components/signin/SignInWallpaper';
import SignInLogo from '../components/signin/SignInLogo';
import SignInForm from '../components/signin/SignInForm';
import SignupSection from '../components/signin/SignUpSection';
import SignInSubmitButton from '../components/signin/SignInSubmitButton';


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <SignInWallpaper>
        <SignInLogo />
        <SignInForm />
        <SignupSection />
        <SignInSubmitButton />
      </SignInWallpaper>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});