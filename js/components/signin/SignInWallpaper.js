import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../../../resources/images/signin/wallpaper.png';

export default class SignInWallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
  },
});