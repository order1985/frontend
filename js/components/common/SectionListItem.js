import React from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

import px2dp from '../../utils/px2dp';

const dimensions = Dimensions.get('window');

class SectionListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={[styles.rowItem]} onPress={this._onPress.bind(this)}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="ios-create-outline"/>
                    <Text style={{fontSize: px2dp(10)}}> {this.props.sourceData.title} </Text>
                </View>
                <Text style={[styles.rowContent]} numberOfLines={2}> {this.props.sourceData.desc} </Text>
            </TouchableOpacity >
        );
    }

    _onPress() {
        if (this.props.sourceData.key % 2 === 0)
            this.props.navigation.navigate('Market', {
                url: this.props.sourceData.url
            });
        else
            this.props.navigation.navigate('Web', {
                url: this.props.sourceData.url
            });
    }
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

export default withNavigation(SectionListItem);