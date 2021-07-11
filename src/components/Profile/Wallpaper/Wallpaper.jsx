import React from "react";
import classes from './Wallpaper.module.css';

const Wallpaper = () => {
    return (

        <div className={classes.wallpaper}>
            <img
                src='https://images.theconversation.com/files/295442/original/file-20191003-52796-1763ajl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'
                alt='ocean.jpg'/>
        </div>


    );
}
export default Wallpaper;