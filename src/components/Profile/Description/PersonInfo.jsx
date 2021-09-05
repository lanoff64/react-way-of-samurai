import React from "react";
import classes from './Disc.module.css';
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";
import AboutSelf from "../AboutSelf/AboutSelf";

const PersonInfo = ({profile,status,updateStatus,...props}) => {

    return (
            <div className={classes.about}>

                    <ProfileStatusHooks status={status} updateStatus={updateStatus} />
                    <ProfileLinks profile={profile}/>
                    <AboutSelf profile={profile}/>

            </div>
    );
}
export default PersonInfo;