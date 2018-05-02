import React from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl, WebView } from 'react-native';

export default class WebScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {params} = this.props.navigation.state;

        const pageUrl = params ? params.url : '';

        console.log('>>>>>>>>>>>the pageUrl is: ' + pageUrl)
        return (
            <WebView
                source={{uri: pageUrl}}
            />
        );
    }
}