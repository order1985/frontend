import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import HomeSwiperItem from './HomeSwiperItem';

const dimensions = Dimensions.get('window');

export default class HomeSwiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount () {
        this.setState({
        items: [
            { title: 'Hello Swiper', css: styles.slide1 },
            { title: 'Beautiful', css: styles.slide2 },
            { title: 'And simple', css: styles.slide3 }
        ]
        })
    }

    render() {
        const datas = this.props.datas;
        return (
            <View style={{height: 200}}>
                <Swiper style={styles.swiper} height={200} horizontal={true} showsPagination={true} paginationStyle={{bottom: 10}} showsButtons={false} loop={true} autoplay={true} autoplayTimeout={5}>
                    {datas.map((data, key) => {
                        return (
                            <HomeSwiperItem key={key} data={data}/>
                        )
                    })}
                </Swiper>
            </View>
        )
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

