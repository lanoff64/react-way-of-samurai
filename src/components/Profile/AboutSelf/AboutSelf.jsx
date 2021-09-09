import classes from "../Description/Disc.module.css";
import React from "react";


const AboutSelf = ({profile,isOwner,goToEditModeAbout}) => {
    return (
        <div className={classes.divDesc}>

            <div className={classes.divDescLabel}>О себе:
                <span  className={classes.aboutValues}>{profile.aboutMe}</span> </div>

            <div className={classes.divDescLabel}>
               Мои скиллы:
               <span  className={classes.aboutValues}> {profile.lookingForAJobDescription}</span>
            </div>

            <div className={classes.divDescLabel}>
                Ищу работу:
                <span className={classes.aboutValues}> {profile.lookingForAJob ? 'Да' : 'Нет'}</span>
            </div>

            <div className={classes.aboutSelfEditBtn}>
                {isOwner &&
                <button className={classes.editBtn} onClick={goToEditModeAbout}>Edit</button>}
            </div>


        </div>
    )
}

export default AboutSelf;