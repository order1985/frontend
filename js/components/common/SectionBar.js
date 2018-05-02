import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

export default class SectionBar extends React.Component {
    render() {
        return (
            <View style={styles.bar}>
                <Text>
                    热门活动：
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        width: dimensions.width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#808080'
    }
});