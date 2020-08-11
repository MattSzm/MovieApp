import React from "react";
import classes from './MovieInfo.module.css';
import WatchOnline from "./WatchOnline/WatchOnline";


const MovieInfo = (props) => {

    return (
      <div className={classes.MovieInfo}>
          <h1>{props.movieTitle}</h1>
          <h3>{props.movieYear}</h3>
          <h3>{props.movieDirector}</h3>
          <br />
          <p>{props.movieDesc}</p>

          <WatchOnline
            Platform={props.movieOnlinePlatform}
            Link={props.movieOnlineLink}
          />
      </div>
    );
}

export default MovieInfo;