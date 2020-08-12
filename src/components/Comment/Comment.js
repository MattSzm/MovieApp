import React from "react";
import classes from './Comment.module.css';

const comment = (props) => {
    return (
        <div className={classes.Comment}>
            <p className={classes.Author}><i>by {props.author}</i></p>
            <p>{props.children}</p>
        </div>
    );
};

export default comment;