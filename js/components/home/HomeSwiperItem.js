import React from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation'; 

const dimensions = Dimensions.get('window');

class HomeSwiperItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const url = data.url;
        
        return (
            <TouchableNativeFeedback key={this.props.key} style={styles.img} onPress={this._onPress.bind(this)}>
                <Image source={{uri: url}} style={styles.img}/>
            </TouchableNativeFeedback>
        )
    }

    _onPress() {
        const type = this.props.data.type;
        switch(type) {
            case 1:
                this.props.navigation.navigate('Personal')
                break;
            case 2:
                this.props.navigation.navigate('Market')
                break;
            default:
                break;
        }
    }
}

const styles = StyleSheet.create({

    page: {
        flex: 1,
        flexDirection: 'column'
    },
    swiper: {},
    img: {
        width: dimensions.width,
        height: 200,
    }
});

export default withNavigation(HomeSwiperItem);
