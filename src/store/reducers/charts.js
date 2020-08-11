import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Charts: {},
    loading: false,
    error: null
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_CHART_START:
            return {...state,
                    loading: true};
        case actionTypes.FETCH_CHART_SUCCESS:
            return {...state,
                    Charts: Object.assign({},
                        action.fetchedObject,
                        state.Charts),
                    loading: false};
        case actionTypes.FETCH_CHART_FAIL:
            return {...state,
                    loading: false,
                    error: action.error}
    }
    return state;
}

export default reducer;