import * as actionTypes from './actionTypes';
import axios from 'axios';

export const onMouseHandlerMovie = (itemId) => {
    return {
        type: actionTypes.ON_MOUSE_HANDLER_MOVIE,
        itemId: itemId
    }
}

export const offMouseHandlerMovie = (itemId) => {
    return {
        type: actionTypes.OFF_MOUSE_HANDLER_MOVIE,
        itemId: itemId
    }
}


const showDetailsStart = () => {
    return {
        type: actionTypes.SHOW_MOVIE_START
    };
};

const showDetailSuccess = (data) => {
    return {
        type: actionTypes.SHOW_MOVIE_SUCCESS,
        fetchedData: data
    }
}

const showDetailFailed = (error) => {
    return {
        type: actionTypes.SHOW_MOVIE_FAIL,
        error: error
    }
}

export const showDetails = (itemId) => {
    return (dispatch) => {
        dispatch(showDetailsStart());
        axios.get('/moviedetails/' + itemId + '.json')
            .then(response => {
                dispatch(showDetailSuccess(response.data))})
                    .catch(error => {
                        dispatch(showDetailFailed(error))
                    });
    };
};