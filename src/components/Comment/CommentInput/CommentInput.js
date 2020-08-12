import React, {Component} from "react";
import classes from './CommentInput.module.css';

const CommentInput = (props) =>{
    return (
        <div>
            <input type="" value={props.value}
                   onChange={props.onchangefunc}
                   placeholder="Write Comment"
                   className={classes.CommentInput}/>
        </div>
    );
}

export default CommentInput;