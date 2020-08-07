import no_time_to_die from '../../assets/MoviePosters/no_time_to_die.progressive.webp'
import woman_in_the_window from '../../assets/MoviePosters/womaninthewindow.progressive.webp'
import inception from '../../assets/MoviePosters/Inception.progressive.webp';
import jumani from '../../assets/MoviePosters/jumaninextlevel.progressive.webp';

import React, { Component } from "react";
import MovieItem from "../../components/MovieItem/MovieItem";
import classes from './MovieSet.module.css';


class MovieSet extends Component{
    state = {
        items: [
            {   id: 0,
                title: 'No Time to Die',
                imageSource: no_time_to_die,
                picked: false,
                refreshed: true},
            {   id: 1,
                title: 'Woman in the Window',
                imageSource: woman_in_the_window,
                picked: false,
                refreshed: true},
            {
                id: 2 ,
                title: 'Inception',
                imageSource: inception,
                picked: false,
                refreshed: true},
            {   id: 3,
                title: 'Jumanji: The Next Level',
                imageSource: jumani,
                picked: false,
                refreshed: true}
        ],
    }

    onMouseHandler = (itemId) => {
        const currentState = [...this.state.items]
        currentState[itemId].picked = true
        currentState[itemId].refreshed = false
        this.setState({items: currentState});
    };
    offMouseHandler = (itemId) => {
        const currentState = [...this.state.items]
        currentState[itemId].picked = false
        this.setState({items: currentState});
    }


    render() {
        const items = this.state.items.map(item => (
            <MovieItem
                title={item.title}
                imageSource={item.imageSource}
                key={item.id}
                id={item.id}
                picked={item.picked}
                refreshed={item.refreshed}
                showInfo={this.onMouseHandler}
                hideInfo={this.offMouseHandler}
            />));

        return (
            <div className={classes.MovieSet}>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default MovieSet;