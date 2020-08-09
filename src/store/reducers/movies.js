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

const initialState = {
    items: [
        {   id: 0,
            title: 'Once Upon a Time in Hollywood',
            imageSource: one_upon_a_time_in_hollywood_poster,
            picked: false,
            refreshed: true},
        {   id: 1,
            title: 'Joker',
            imageSource: joker_poster,
            picked: false,
            refreshed: true},
        {   id: 2 ,
            title: 'Inception',
            imageSource: inception_poster,
            picked: false,
            refreshed: true},
        {   id: 3,
            title: 'Jumanji: The Next Level',
            imageSource: jumani_poster,
            picked: false,
            refreshed: true},
        {   id: 4,
            title: 'Dunkirk',
            imageSource: dunkirk_poster,
            picked: false,
            refreshed: true},
        {   id: 5,
            title: 'Pulp Fiction',
            imageSource: pulpfiction_poster,
            picked: false,
            refreshed: true},
        {   id: 6,
            title: 'Emma',
            imageSource: emma_poster,
            picked: false,
            refreshed: true},
        {   id: 7,
            title: 'Titanic',
            imageSource: titanic_poster,
            picked: false,
            refreshed: true},
        {   id: 8,
            title: 'Django',
            imageSource: django_poster,
            picked: false,
            refreshed: true,
            currentPosition: 8},
        {   id: 9,
            title: 'No Time to Die',
            imageSource: no_time_to_die_poster,
            picked: false,
            refreshed: true},
        {   id: 10,
            title: 'Woman in the Window',
            imageSource: woman_in_the_window_poster,
            picked: false,
            refreshed: true},
        {   id: 11,
            title: 'Shutter Island',
            imageSource: shutter_island_poster,
            picked: false,
            refreshed: true},
        {   id: 12,
            title: 'Spider-man',
            imageSource: spider_man_poster,
            picked: false,
            refreshed: true},
        {   id: 13,
            title: 'Matrix',
            imageSource: matrix_poster,
            picked: false,
            refreshed: true},
        {   id: 14,
            title: 'Silent Hill',
            imageSource: silent_hill_poster,
            picked: false,
            refreshed: true},
        {   id: 15,
            title: 'Lion King',
            imageSource: lion_king_poster,
            picked: false,
            refreshed: true},
    ],
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


    }
    return state;
}

export default reducer;