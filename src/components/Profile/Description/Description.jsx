import React from "react";
import classes from './Disc.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import PersonInfo from "./PersonInfo";
import PersonAvatar from "./PersonAvatar";
import UserName from "../UserName/UserName";



const Description = ({profile,updateStatus,status,saveContacts, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }



    return (
        <div className={classes.avaAndDesc}>

            <UserName profile={profile} />
            <PersonAvatar profile={profile} {...props}/>
            <PersonInfo saveContacts={saveContacts} isOwner={props.isOwner} updateStatus={updateStatus} status={status} profile={profile}/>

        </div>

    );
}
export default Description;