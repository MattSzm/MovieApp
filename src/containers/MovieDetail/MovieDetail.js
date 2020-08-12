import React, { Component, Fragment } from "react";
import MovieYoutube from "../../components/MovieDetail/MovieYoutube/MovieYoutube";
import MovieInfo from "../../components/MovieDetail/MovieInfo/MovieInfo";
import classes from './MovieDetail.module.css';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
import Comments from "../Comments/Comments";

class MovieDetail extends Component{
    render() {
        let detailComponent = null;
        if(this.props.loading){
        detailComponent = <Spinner />;
        }
        if ( this.props.movieDetailData) {
            detailComponent = (
                <div className={classes.MovieDetail}>
                    <MovieYoutube url={this.props.movieDetailData.teaserUrl}
                                  widthResolution={this.props.widthResolution}
                                  heightResolution={this.props.heightResolution}/>
                    <MovieInfo
                        movieTitle={this.props.movieDetailData.title}
                        movieDesc={this.props.movieDetailData.description}
                        movieYear={this.props.movieDetailData.year}
                        movieDirector={this.props.movieDetailData.director}
                        movieOnlineLink={this.props.movieDetailData.onlineLink}
                        movieOnlinePlatform={this.props.movieDetailData.onlinePlatform}
                />
                </div>);
        }

        return (
            <Fragment>
                {detailComponent}
                <Comments/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetailIndex: state.movies.movieDetailIndex,
        movieDetailData: state.movies.movieDetailData,
        loading: state.movies.loading
    }
}

export default connect(mapStateToProps)(MovieDetail);