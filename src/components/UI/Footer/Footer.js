import React from "react";
import classes from './Footer.module.css';


const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Line} />
            <p>Check the repository on my
                <strong
                    onClick={()=>{window.open('https://github.com/MattSzm/MoviesApp',
                        '_blank');}}>
                        Github
                </strong>.</p>
            <p>© 2020 Mateusz Szmal. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;