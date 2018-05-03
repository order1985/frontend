import React from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation'; 

import SectionBar from '../common/SectionBar';
import SectionList from '../common/SectionList';

class HomeActivityArea extends React.Component {
    constructor(props) {
        super(props);
        
        this.data = [
                {
                    key: '1',
                    title: '测试1',
                    desc: '这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1',
                    url: 'http://www.baidu.comn'
                },
                {
                    key: '2',
                    title: '测试2',
                    desc: '这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1',
                    url: 'http://www.sina.com.cn'
                },
                {
                    key: '3',
                    title: '测试3',
                    desc: '这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1',
                    url: 'http://www.taobao.com'
                },
                {
                    key: '4',
                    title: '测试1',
                    desc: '这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1这是测试1',
                    url: 'http://facebook.github.io/react-native/docs/webview.html#source'
                }
            ];
    }
    

    render() {
        return (
            <View>
                <SectionBar/>
                <SectionList data={this.data}/>
            </View>
        );
    }
}

export default withNavigation(HomeActivityArea);