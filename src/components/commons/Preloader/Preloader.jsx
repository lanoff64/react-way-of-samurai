import classes from "./Preloader.module.css";
import React from "react";

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <div className={classes.spinner}></div>
        </div>
    );
}

export default Preloader;