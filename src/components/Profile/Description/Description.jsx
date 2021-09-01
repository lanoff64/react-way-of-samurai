import React from "react";
import classes from './Disc.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import PersonInfo from "./PersonInfo";
import PersonAvatar from "./PersonAvatar";



const Description = ({profile, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }



    return (
        <div className={classes.avaAndDesc} >
            <div className={classes.userDecsName} >
                {profile.fullName}
                <div className={classes.divDescLabel}>ID: {profile.userId}</div>
            </div>

            <PersonAvatar
                profile={profile}
                {...props}/>

            <PersonInfo
                profile={profile}/>

        </div>
    );
}
export default Description;