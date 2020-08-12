import * as actionTypes from './actionTypes';
import axios from 'axios';


const showMovieCommentsStart = () => {
    return{
        type: actionTypes.SHOW_MOVIE_COMMENTS_START
    }
}

const showMovieCommentSuccess = (data, Id) => {
    return{
        type: actionTypes.SHOW_MOVIE_COMMENTS_SUCCESS,
        fetchedData: data,
        fetchedId: Id
    }
}

const showMovieCommentFail = (error) => {
    return{
        type: actionTypes.SHOW_MOVIE_COMMENTS_FAIL,
        error: error
    }
}


export const showMovieComments = (Id) => {
    return (dispatch) => {
        dispatch(showMovieCommentsStart());
        axios.get('/comments/' + Id + '.json')
            .then(response => {
                dispatch(showMovieCommentSuccess(response.data, Id))})
            .catch(error => {
                dispatch(showMovieCommentFail(error))
            });
    }
}

const sendNewCommentSuccess = (data) => {
    return {
        type: actionTypes.SEND_NEW_COMMENT_SUCCESS,
        newData: data
    }
}


export const sendNewComment = (Id, Data) => {
    return (dispatch) => {
        axios.post('/comments/' + Id + '.json', Data)
            .then(response => {
                dispatch(sendNewCommentSuccess(response.data))
                dispatch(showMovieComments(Id));
        }).catch(error => {
            console.log(error)
        });
    }
}