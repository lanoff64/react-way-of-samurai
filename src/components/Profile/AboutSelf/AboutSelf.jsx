import classes from "../Description/Disc.module.css";
import React from "react";


const AboutSelf = ({profile}) => {
    return (
        <div className={classes.divDesc}>

            <div className={classes.divDescLabel}>О себе:
                {profile.aboutMe}</div>

            <div className={classes.divDescLabel}>
               Ищет работу:
                {profile.lookingForAJobDescription}
            </div>

            <div className={classes.divDescLabel}>
                Phone:
                {profile.lookingForAJob ? '88005553535' : 'скрыто'}
            </div>


        </div>
    )
}

export default AboutSelf;