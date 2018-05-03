import React from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeSwiper from '../components/home/HomeSwiper';
import HomeActivityArea from '../components/home/HomeActivityArea';
import * as HomeActions from '../actions/HomeDataAction';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.loading = false;

    this.swiperData = [
      {
        key: '1',
        url: 'https://facebook.github.io/react/logo-og.png',
        type: 1
      },
      {
        key: '2',
        url: 'https://facebook.github.io/react/logo-og.png',
        type: 2
      },
      {
        key: '3',
        url: 'https://facebook.github.io/react/logo-og.png',
        type: 3
      },
      {
        key: '4',
        url: 'https://facebook.github.io/react/logo-og.png',
        type: 4
      }
    ]
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} pagingEnabled={true} refreshControl={
                        <RefreshControl
                            refreshing={this.props.loading}
                            onRefresh={this._onPress.bind(this)}
                            title="加载中..."
                        />}>
        <HomeSwiper datas={this.swiperData}/>
        <HomeActivityArea/>

      </ScrollView>
    );
  }

  _onPress() {
      let timestamp=new Date().getTime();
      this.props.actions.fetchData(timestamp);
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(HomeActions, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.homeDataState.loading,
        hasData: state.homeDataState.hasData,
        dataSource: state.homeDataState.dataSource,
        dataTime: state.homeDataState.dataTime,
        error: state.homeDataState.error,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);