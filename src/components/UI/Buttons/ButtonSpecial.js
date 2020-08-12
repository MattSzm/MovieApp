import React from "react";
import classes from './ButtonSpecial.module.css';


const button = (props) => {

    return (
      <div className={props.active ? classes.customButton :
          [classes.customButton, classes.disabled].join(' ')}
           onClick={props.active ? props.click : null}>
        <span className={classes.noSelect}
            >
            {props.children}
        </span>
          <div className={classes.circle}/>
      </div>
  );
};

export default button;