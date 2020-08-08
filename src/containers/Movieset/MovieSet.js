import no_time_to_die from '../../assets/MoviePosters/no_time_to_die.progressive.webp'
import woman_in_the_window from '../../assets/MoviePosters/womaninthewindow.progressive.webp'
import inception from '../../assets/MoviePosters/Inception.progressive.webp';
import jumani from '../../assets/MoviePosters/jumaninextlevel.progressive.webp';
import dunkirk from '../../assets/MoviePosters/dunkirk.jpg';
import pulpfiction from '../../assets/MoviePosters/pulpfiction.jpg';
import emma from '../../assets/MoviePosters/emma.jpg';
import titanic from '../../assets/MoviePosters/titanic.jpg';
import django from '../../assets/MoviePosters/django.jpg';
import joker from '../../assets/MoviePosters/joker.jpg';
import one_upon_a_time_in_hollywood from '../../assets/MoviePosters/OnceUponaTimeinHollywood.jpg';

import React, { Component } from "react";
import MovieItem from "../../components/MovieItem/MovieItem";
import classes from './MovieSet.module.css';
import Slider from '../../components/UI/SliderItems/SliderItems';


class MovieSet extends Component{
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    state = {
        items: [
            {   id: 0,
                title: 'Once Upon a Time in Hollywood',
                imageSource: one_upon_a_time_in_hollywood,
                picked: false,
                refreshed: true},
            {   id: 1,
                title: 'Joker',
                imageSource: joker,
                picked: false,
                refreshed: true},
            {   id: 2 ,
                title: 'Inception',
                imageSource: inception,
                picked: false,
                refreshed: true},
            {   id: 3,
                title: 'Jumanji: The Next Level',
                imageSource: jumani,
                picked: false,
                refreshed: true},
            {   id: 4,
                title: 'Dunkirk',
                imageSource: dunkirk,
                picked: false,
                refreshed: true},
            {   id: 5,
                title: 'Pulp Fiction',
                imageSource: pulpfiction,
                picked: false,
                refreshed: true},
            {   id: 6,
                title: 'Emma',
                imageSource: emma,
                picked: false,
                refreshed: true},
            {   id: 7,
                title: 'Titanic',
                imageSource: titanic,
                picked: false,
                refreshed: true},
            {   id: 8,
                title: 'Django',
                imageSource: django,
                picked: false,
                refreshed: true,
                currentPosition: 8},
            {   id: 9,
                title: 'No Time to Die',
                imageSource: no_time_to_die,
                picked: false,
                refreshed: true},
            {   id: 10,
                title: 'Woman in the Window',
                imageSource: woman_in_the_window,
                picked: false,
                refreshed: true},
        ],
        width: 0,
        height: 0,
        offset: 0,
        leftScrollDisabled: true,
        rightScrollDisabled: false
    }

    onMouseHandler = (itemId) => {
        const currentState = [...this.state.items];
        for (let item of currentState){
            if(item.id === itemId){
                item.picked = true;
                item.refreshed = false;
                break
            }
        }
        this.setState({items: currentState});
    };
    offMouseHandler = (itemId) => {
        const currentState = [...this.state.items];
        for (let item of currentState){
            if(item.id === itemId) {
                item.picked = false;
                break
            }
        }
        this.setState({items: currentState});
    }

    scrollLeft = () => {
        if (this.state.width < 1500) {
            const prevOffset = this.state.offset;
            if ( prevOffset > 0) {
                this.setState({offset: prevOffset - 270 * 3,
                                    leftScrollDisabled: false,
                                    rightScrollDisabled: false})
            }
        else {
            this.setState({leftScrollDisabled: true,
                                 rightScrollDisabled: false});
            }}
        else if(this.state.width > 1500) {
            const prevOffset = this.state.offset;
            if (prevOffset > 0) {
                this.setState({offset: prevOffset - 360 * 3,
                                    leftScrollDisabled: false,
                                    rightScrollDisabled: false})
            }
            else {
                this.setState({leftScrollDisabled: true,
                            rightScrollDisabled: false});
            }
        }
    };

    scrollRight = () => {
        if (this.state.width < 1500) {
            const prevOffset = this.state.offset;
            let value = this.state.width / 270 * 0.95;
            if (value + prevOffset / 270*0.95 <= this.state.items.length ) {
                this.setState({offset: prevOffset + 270 * 3,
                                    rightScrollDisabled: false,
                                    leftScrollDisabled: false})}
        else {
                this.setState({rightScrollDisabled: true,
                                    leftScrollDisabled: false})
            }}
        else if(this.state.width >= 1500) {
            const prevOffset = this.state.offset;
            let value = this.state.width / 360 * 0.95;
            if (value + prevOffset / 360 <= this.state.items.length) {
                this.setState({offset: prevOffset + 360 * 3,
                                    rightScrollDisabled: false,
                                    leftScrollDisabled: false})
            }
            else{
                this.setState({rightScrollDisabled: true,
                                    leftScrollDisabled: false})
            }
        }
    };


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
                offset = {this.state.offset}
            />));

        return (
                <div className={classes.MovieSet}>
                    <ul>
                        {items}
                    </ul>
                    <Slider direction='left'
                            scroll={this.scrollLeft}
                            disabled={this.state.leftScrollDisabled}
                    />
                    <Slider direction='right'
                            disabled={this.state.rightScrollDisabled}
                            scroll={this.scrollRight}
                    />
                </div>

        );
    }
}

export default MovieSet;