import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const dimensions = Dimensions.get('window');

export default class HomeSwiper extends React.Component {
    render() {
        return (
            <View style={{height: 200}}>
                <Swiper style={styles.swiper} height={200} horizontal={true} showsPagination={true} paginationStyle={{bottom: 10}} showsButtons={false} loop={true} 
                        autoplay={true} autoplayTimeout={5} >
                    <Image source={require('../../../resources/images/banners/1.jpg')} style={styles.img}/>
                    <Image source={require('../../../resources/images/banners/2.jpg')} style={styles.img}/>
                    <Image source={require('../../../resources/images/banners/3.jpg')} style={styles.img}/>
                    <Image source={require('../../../resources/images/banners/4.jpg')} style={styles.img}/>
                </Swiper>
            </View>
        );
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

