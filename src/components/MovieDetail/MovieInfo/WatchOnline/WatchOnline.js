import React from "react";
import netflix_banner from "../../../../assets/netflix_banner.png";
import hbogo_banner from "../../../../assets/hbo_go_banner.jpg";
import classes from './WatchOnline.module.css';

const openNewPage = (Link) => {
    window.open(Link, '_blank');
}


const WatchOnline = (props) => {
    let watchOnline = null;
    if (props.Platform === 'NETFLIX'){
        watchOnline = (
            <div>
                <h3>Available on:</h3>
                <img src={netflix_banner}
                     onClick={openNewPage.bind(this, props.Link)}
                />
            </div>);
    }
    else if (props.Platform === 'HBOGO'){
        watchOnline = (
            <div>
                <h3>Available on:</h3>
                <img src={hbogo_banner}
                     onClick={openNewPage.bind(this, props.Link)}
                />
            </div>);
    }

    return (
        <div className={classes.WatchOnline}>
            {watchOnline}
        </div>
    );
}


export default WatchOnline;