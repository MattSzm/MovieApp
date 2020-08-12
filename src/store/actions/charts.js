import * as actionTypes from './actionTypes';
import axios from 'axios';



const fetchDataStart = (Id) => {
    return {
        type: actionTypes.FETCH_CHART_START,
        lastFetchId: Id
    };
};

const fetchDataSuccess = (data, Id) => {
    let object = {};
    object[Id] = data;
    return {
        type: actionTypes.FETCH_CHART_SUCCESS,
        fetchedObject: object
    };
};

const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_CHART_FAIL,
        error: error
    };
};

export const fetchData = (Id) => {
    return (dispatch) => {
        dispatch(fetchDataStart(Id));
        axios.get('/charts/' + Id + '.json')
            .then(response => {
                dispatch(fetchDataSuccess(response.data, Id))})
                    .catch(error => {
                        dispatch(fetchDataFail(error))
                    });
    };
};