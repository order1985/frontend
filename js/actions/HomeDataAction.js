import * as types from './ActionTypes';

import HomeModel from '../models/HomeModel';
import fetchWithTimeout from '../utils/fetchWithTimeout';

export function fetchData(date) {
    const url = 'https://facebook.github.io/react-native/movies.json';

    return (dispatch) => {
        dispatch(fetchBegin());

        console.log('start to fetch home data');
        let homeModel = new HomeModel();
        homeModel.fetchLocalData(date).then((data) => {
            console.log('already the latest data!');
            dispatch(fetchSucceed(data, date));
        }, (localData) => {
            console.log('>>>>>>>>>>>the url is: ' + url)
            fetchWithTimeout(5000, fetch(url))
            .then( response => response.json())
            .then( json => {
                console.log('>>>>>>>>>>>>the json is: ' + JSON.stringify(json))
                if (isValidData(json)) {
                    console.log('data is valid, cache it');
                    let timestamp=new Date().getTime();
                    // saveToLocal(json, timestamp);
                    dispatch(fetchSucceed(json, timestamp));
                } else {//TODO
                    dispatch(fetchFailed());
                }
            }).catch((error) => {
                console.log('>>>>>>>>>>>>>>error occured, the error is: ' + error);
                dispatch(fetchFailed());
            })
        })
    }
}

function fetchBegin() {
    return {
        type: types.FETCH_HOME_DATA,
    };
}

function fetchSucceed(json, date) {
    return {
        type: types.FETCH_HOME_DATA_SUCCEED,
        dataSource: json,
        timestamp: date
    };
}

function fetchFailed() {
    return {
        type: types.FETCH_HOME_DATA_FAILED,
    };
}

function isValidData(json) {
    return true;
}