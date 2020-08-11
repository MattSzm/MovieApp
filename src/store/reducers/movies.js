import * as actionTypes from '../actions/actionTypes';
import one_upon_a_time_in_hollywood_poster from "../../assets/MoviePosters/OnceUponaTimeinHollywood.jpg";
import joker_poster from "../../assets/MoviePosters/joker.jpg";
import inception_poster from "../../assets/MoviePosters/Inception.progressive.webp";
import jumani_poster from "../../assets/MoviePosters/jumaninextlevel.progressive.webp";
import dunkirk_poster from "../../assets/MoviePosters/dunkirk.jpg";
import pulpfiction_poster from "../../assets/MoviePosters/pulpfiction.jpg";
import emma_poster from "../../assets/MoviePosters/emma.jpg";
import titanic_poster from "../../assets/MoviePosters/titanic.jpg";
import django_poster from "../../assets/MoviePosters/django.jpg";
import no_time_to_die_poster from "../../assets/MoviePosters/no_time_to_die.progressive.webp";
import woman_in_the_window_poster from "../../assets/MoviePosters/womaninthewindow.progressive.webp";
import shutter_island_poster from "../../assets/MoviePosters/shutter_island.progressive.jpg";
import spider_man_poster from "../../assets/MoviePosters/spider_man.progressive.jpg";
import matrix_poster from "../../assets/MoviePosters/matrix.progressive.jpg";
import silent_hill_poster from "../../assets/MoviePosters/SilentHill.jpg";
import lion_king_poster from "../../assets/MoviePosters/lion_king.progressive.jpg";
import hacksaw_ridge_poster from '../../assets/MoviePosters/hacksaw.jpg';
import green_book_poster from '../../assets/MoviePosters/green_book.jpg';
import black_swan_poster from '../../assets/MoviePosters/black_swan.jpg';
import dark_knight_poster from '../../assets/MoviePosters/the_dark_knight.jpg';
import back_to_the_future from '../../assets/MoviePosters/back_to_the_future.webp';

const initialState = {
    items: [
        {   id: 0,
            imageSource: one_upon_a_time_in_hollywood_poster,
            picked: false,
            refreshed: true},
        {   id: 1,
            imageSource: joker_poster,
            picked: false,
            refreshed: true},
        {   id: 2 ,
            imageSource: inception_poster,
            picked: false,
            refreshed: true},
        {   id: 3,
            imageSource: jumani_poster,
            picked: false,
            refreshed: true},
        {   id: 4,
            imageSource: dunkirk_poster,
            picked: false,
            refreshed: true},
        {   id: 5,
            imageSource: pulpfiction_poster,
            picked: false,
            refreshed: true},
        {   id: 6,
            imageSource: emma_poster,
            picked: false,
            refreshed: true},
        {   id: 7,
            imageSource: titanic_poster,
            picked: false,
            refreshed: true},
        {   id: 8,
            imageSource: django_poster,
            picked: false,
            refreshed: true,
            currentPosition: 8},
        {   id: 9,
            imageSource: no_time_to_die_poster,
            picked: false,
            refreshed: true},
        {   id: 10,
            imageSource: woman_in_the_window_poster,
            picked: false,
            refreshed: true},
        {   id: 11,
            imageSource: shutter_island_poster,
            picked: false,
            refreshed: true},
        {   id: 12,
            imageSource: spider_man_poster,
            picked: false,
            refreshed: true},
        {   id: 13,
            imageSource: matrix_poster,
            picked: false,
            refreshed: true},
        {   id: 14,
            imageSource: silent_hill_poster,
            picked: false,
            refreshed: true},
        {   id: 15,
            imageSource: lion_king_poster,
            picked: false,
            refreshed: true},
        {   id: 16,
            imageSource: hacksaw_ridge_poster,
            picked: false,
            refreshed: true},
        {   id: 17,
            imageSource: green_book_poster,
            picked: false,
            refreshed: true},
        {   id: 18,
            imageSource: black_swan_poster,
            picked: false,
            refreshed: true},
        {   id: 19,
            imageSource: dark_knight_poster,
            picked: false,
            refreshed: true},
        {   id: 20,
            imageSource: back_to_the_future,
            picked: false,
            refreshed: true},
    ],
    loading: false,
    fetchError: null,
    movieDetailData: null,
};

const on_mouse_handler = (copiedItems, itemId) => {
    for (let item of copiedItems){
        if(item.id === itemId) {
            item.picked = true;
            item.refreshed = false;
            return copiedItems
        }
    }
}

const off_mose_handler = (copiedItems, itemId) => {
    for (let item of copiedItems){
        if(item.id === itemId) {
            item.picked = false;
            return copiedItems
        }
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.ON_MOUSE_HANDLER_MOVIE:
            const copiedItemsOn = [...state.items];
            return {...state,
                    items: on_mouse_handler(copiedItemsOn,
                                    action.itemId)};
        case actionTypes.OFF_MOUSE_HANDLER_MOVIE:
            const copiedItemsOff = [...state.items];
            return {...state,
                    items: off_mose_handler(copiedItemsOff,
                                        action.itemId)};
        case actionTypes.SHOW_MOVIE_START:
            return {...state,
                     loading: true,
                    fetchError: null,
                    movieDetailData: null};
        case actionTypes.SHOW_MOVIE_SUCCESS:
            return {...state,
                    loading: false,
                    movieDetailData: action.fetchedData};
        case actionTypes.SHOW_MOVIE_FAIL:
            return {...state,
                    loading: false,
                    fetchError: action.error};
    }
    return state;
}

export default reducer;