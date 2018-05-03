import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    hasData: false,
    error: false,
    dataSource: {},
    dataTime: ''
};

export default function homeDataState(state=initialState, action){
    switch (action.type){
        case types.FETCH_HOME_DATA:
            console.log('>>>>>>>>>>>>in home reducer, start fetch home data')
            return Object.assign({}, state, {
                ...state,
                loading: true,
                error: false
            });

        case types.FETCH_HOME_DATA_SUCCEED:
            console.log('>>>>>>>>>>>>in home reducer, fetch home data succeed')
            return Object.assign({}, state, {
                ...state,
                loading: false,
                hasData: true,
                dataSource: action.dataSource,
                dataTime: action.dataTime
            });

        case types.FETCH_HOME_DATA_FAILED:
            console.log('>>>>>>>>>>>>in home reducer, fetch home data failed')
            return Object.assign({}, state, {
                ...state,
                loading: false,
                error: true
            });

        default:
            return state;
    }
}