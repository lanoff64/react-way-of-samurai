import classes from "../Description/Disc.module.css";
import React from "react";


const ProfileLinks = ({profile}) => {
    return(
        <div>
            <div className={classes.links}>
                <span>Links:</span>
                {Object.keys(profile.contacts).map(key =>
                    <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )}
            </div>
        </div>
    )
 }


const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.contacts}> <b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
}

 export default ProfileLinks;

