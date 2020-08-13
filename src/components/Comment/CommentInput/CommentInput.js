import React from "react";
import classes from './CommentInput.module.css';

const CommentInput = (props) =>{
    return (
        <div>
            <textarea value={props.value}
                   onChange={props.onchangefunc}
                   placeholder="Write Comment"
                   className={classes.CommentInput}/>
        </div>
    );
}

export default CommentInput;