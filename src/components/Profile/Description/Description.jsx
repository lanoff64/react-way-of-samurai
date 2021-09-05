import React from "react";
import classes from './Disc.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import PersonInfo from "./PersonInfo";
import PersonAvatar from "./PersonAvatar";
import UserName from "../UserName/UserName";



const Description = ({profile,updateStatus,status, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }



    return (
        <div className={classes.avaAndDesc}>

            <UserName profile={profile} />
            <PersonAvatar profile={profile} {...props}/>
            <PersonInfo updateStatus={updateStatus} status={status} profile={profile}/>

        </div>

    );
}
export default Description;