import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Comments: null,
    loading: false,
    error: null,
    IdMovie: null
}


const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.SHOW_MOVIE_COMMENTS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SHOW_MOVIE_COMMENTS_SUCCESS:
            return {
                ...state,
                Comments: action.fetchedData,
                loading: false,
                IdMovie: action.fetchedId};
        case actionTypes.SHOW_MOVIE_COMMENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error};
        case actionTypes.SEND_NEW_COMMENT_SUCCESS:
            return {
                ...state
            };
    }
    return state;
}

export default reducer;