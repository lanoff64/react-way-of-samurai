import React from 'react';
import classes from './../Dialogs.module.css'

const Mesage = (props) => {
    return (
        <div>
            <div className={classes.oneMessage}>
                <div className={classes.other}>{props.message}</div>
            </div>
        </div>
    );
}
export default Mesage;
