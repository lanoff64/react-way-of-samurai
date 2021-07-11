import React from "react";
import classes from './Disc.module.css';

const Description = () => {
    return (
        <div className={classes.avaAndDesc}>
            <div className={classes.ava}>
                <img src='https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg'
                     alt={"avatar"}/>
            </div>
            <div className={classes.about}>
                <div className={classes.divDesc}>
                    <span>Description</span>
                    <div>age</div>
                    <div>city</div>
                    <div>education</div>
                    <div>hobbies</div>


                </div>
            </div>

        </div>

    );
}
export default Description;