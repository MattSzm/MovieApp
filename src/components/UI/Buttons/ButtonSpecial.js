import React from "react";
import classes from './ButtonSpecial.module.css';


const button = (props) => {
  return (
      <div className={classes.customButton}
           onClick={props.click}>
        <span className={classes.noSelect}
            >
            {props.children}
        </span>
          <div className={classes.circle}/>
      </div>
  );
};

export default button;