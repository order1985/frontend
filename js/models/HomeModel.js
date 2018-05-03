const HOME_DATA = '@HomeData';

import {AsyncStorage} from 'react-native';
import fetchWithTimeout from '../utils/fetchWithTimeout';

export default class HomeModel {

    constructor(props) {
        this.saveToLocal = true;
        this.useLocalCache = true;
        this.url = 'http://www.baidu.com';
    }

    saveToLocal(json, time){
        if (!this.saveToLocal)
            return;

        let data = {
            time: time,
            content: json
        };

        try {
            AsyncStorage.setItem(HOME_DATA, JSON.stringify(data));
        } catch (error) {
            //
        }
    }

    fetchData(time) {

    }

    fetchLocalData(time) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(HOME_DATA, (error, result)=>{
                if(!error){
                    const data = JSON.parse(result);
                    //judge whether the data is updated
                    if(data) {
                        if (data.time.toString() === time) {
                            resolve(data.content);
                        } else {
                            reject(data.content);
                        }
                    }else{ //no any data records
                        reject(null);
                    }
                }else{ // must fetch server data
                    reject(null);
                }
            });
        });
    }

    fetchRemoteData() {
        console.log('in homemodel, fetch remote Data, the url is: ' + this.url);
        fetchWithTimeout(5000, fetch(this.url))
            .then( response => response.json())
            .then( json => {
                console.log('>>>>>>>>>>>>the json is: ' + JSON.toString(json))
                if (isValidData(json)) {
                    console.log('data is valid, cache it');
                    let timestamp=new Date().getTime();
                    saveToLocal(json, timestamp);
                } else {//TODO

                }
            }).catch((error) => {
                console.log('>>>>>>>>>>>>>>error occured, the error is: ' + JSON.toString(error));
            })
    }

    isValidData(json) {
        return true;
    }
}