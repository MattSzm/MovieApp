import React from "react";
import classes from './MovieItem.module.css';


const movieItem = (props) => {
    let currClasses = [classes.MovieItem, classes.continuouslyHidden]
    if (!props.refreshed) {
        currClasses = [classes.MovieItem, classes.HideInfo]
    }
    if (props.picked){
        currClasses = [classes.MovieItem, classes.ShowInfo]
    }

    return (
        <li className={currClasses.join(' ')}
                           style={{
                               transform: `translateX(${-props.offset}px)`,
                               transition: 'transform 0.5s ease-in'
                           }}
                            onMouseOver={props.showInfo.bind(this, props.id)}
                            onMouseLeave={props.hideInfo.bind(this, props.id)}>
                            <img src={props.imageSource}/>
                            <h1>Check more!</h1>
        </li>
    );


}

export default movieItem;