import React from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation'; 

import px2dp from '../../utils/px2dp';
import SectionListItem from './SectionListItem';

const dimensions = Dimensions.get('window');

class SectionList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList data={this.props.data} renderItem={this._renderItem}>
            </FlatList>
        );
    }

    _renderItem = ({item}) => (
        <SectionListItem sourceData={item}/>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        flexDirection: 'row',
        paddingTop: px2dp(12),
        paddingBottom: px2dp(6),
        paddingLeft: px2dp(15),
        alignItems: 'center',
        // borderTopWidth: theme.segment.width
    },
    headerLabel: {
        color: 'steelblue',
        fontSize: px2dp(17),
        marginLeft: px2dp(7)
    },
    rowItem: {
        paddingTop: px2dp(10),
        paddingBottom: px2dp(10),
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15),
        justifyContent: 'center'
    },
    rowContent: {
        fontSize: px2dp(14)
    }
});

export default withNavigation(SectionList);