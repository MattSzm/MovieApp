import React, { Component } from "react";
import MovieYoutube from "../../components/MovieDetail/MovieYoutube/MovieYoutube";
import MovieInfo from "../../components/MovieDetail/MovieInfo/MovieInfo";
import classes from './MovieDetail.module.css';


class MovieDetail extends Component{
    // test
    state = {
        id: 0,
        title: 'Once Upon a Time in Hollywood',
        teaserUrl: 'ELeMaP8EPAA',
        description: `A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.`,
        director: 'Quentin Tarantino'
    }


    render() {
        return (
            <div className={classes.MovieDetail}>
                <MovieYoutube url={this.state.teaserUrl}
                                widthResolution={this.props.widthResolution}
                                heightResolution={this.props.heightResolution}/>
                <MovieInfo
                    movieTitle={this.state.title}
                    movieDesc={this.state.description}
                    movieDirector={this.state.director}
                />
            </div>
        );
    }
}

export default MovieDetail;