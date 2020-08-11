import React from "react";
import YouTube from "react-youtube";
import classes from './MovieYoutube.module.css';


const MovieYoutube = (props) => {
    const opts = {
        height: '450',
        width: '740',
        playerVars: {
            autoplay: 0
        }
    };
    if (props.widthResolution < 421){
        opts.height = '140';
        opts.width = '230';
    }
    else if (props.widthResolution < 540){
        opts.height = '200';
        opts.width = '330';
    }
    else if (props.widthResolution < 700){
        opts.height = '260';
        opts.width = '430';
    }
    else if (props.widthResolution < 1150){
        opts.height = '340';
        opts.width = '560';
    }
    else if (props.widthResolution < 1300){
        opts.height = '360';
        opts.width = '590';
    }
    else if (props.widthResolution < 1500){
        opts.height = '400';
        opts.width = '660';
    }


    let apliedClassess = [classes.MovieYoutube, classes.YoutubeLoading];
    let youtube = (<YouTube
                        videoId={props.url}
                        opts={opts}
                    />);
    if (props.widthResolution < 290){
        youtube = null;
    }
    if(youtube){
        apliedClassess = [classes.MovieYoutube, classes.YoutubeReady];
    }

    return (
        <div className={apliedClassess.join(' ')}>
            {youtube}
        </div>
    );
}

export default MovieYoutube;