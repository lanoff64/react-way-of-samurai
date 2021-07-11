import React from 'react';
import classes from './AnswerMessage.module.css'

const AnswerMessage = (props) => {
    return (
        <div className={classes.mesage}>
            <div className={classes.oneMessage}>
                <div className={classes.me}>{props.message}</div>
            </div>
        </div>
    );
}
export default AnswerMessage;
