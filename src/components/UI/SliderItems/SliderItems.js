import React from "react";
import classes from './SliderItems.module.css';

const slider = (props) => {
    let classname = [props.direction==='left'?classes.arrowLeft:classes.arrowRight];
    if (props.disabled){
        classname.push(classes.disabled)
    }
    return (
        <div className={classname.join(' ')}
        onClick={props.scroll}
        />
    );
};

export default slider;