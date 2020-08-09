import React from "react";
import appLogo from '../../assets/MoviePosters/Icon2Resized.png';
import classes from './Logo.module.css';


const logo = (props) => (
    <div className={classes.Logo}>
        <img src={appLogo} />
    </div>
);

export default logo;