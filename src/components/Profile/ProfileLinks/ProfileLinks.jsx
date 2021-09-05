import classes from "../Description/Disc.module.css";
import React from "react";


const ProfileLinks = ({profile, isOwner,goToEditMode}) => {

    return(
        <div className={classes.links}>

                <span>Links:</span>
                {Object.keys(profile.contacts).map(key =>
                    <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )}
            <div>
                {isOwner &&
                <button onClick={goToEditMode}>Edit</button>}
            </div>
        </div>
    )
 }



const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.contacts}> <b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
}

 export default ProfileLinks;

