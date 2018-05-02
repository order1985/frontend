import React from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl } from 'react-native';

import HomeSwiper from '../components/home/HomeSwiper';
import HomeActivityArea from '../components/home/HomeActivityArea';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('>>>>>>>>>>>>>>>>in HOmeScreen the props is: ' + this.props.navigation)
    this.loading = false;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} pagingEnabled={true} refreshControl={
                        <RefreshControl
                            refreshing={this.loading}
                            onRefresh={this._onPress.bind(this)}
                            title="拼命加载中..."
                        />}>
        <HomeSwiper/>
        <HomeActivityArea/>

      </ScrollView>
    );
  }

  _onPress() {
      this.loading = true;
      setTimeout(() => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>test123, update props loading');
        this.loading = false;
      }, 5000);
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});