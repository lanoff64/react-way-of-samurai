import classes from "../Description/Disc.module.css";
import React from "react";


const ProfileLinks = ({profile, isOwner,goToEditMode}) => {

    return(
        <div>
            <div className={classes.links}>


                {Object.keys(profile.contacts).map(key =>
                    <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )}

            </div>

            <div>
                {isOwner &&
                <button className={classes.editBtn} onClick={goToEditMode}>Edit</button>}
            </div>
        </div>

    )
 }



const Contacts = ({contactTitle, contactValue}) => {
    return (
    <div className={classes.contacts}>
        <b>{contactTitle}</b>:
        {contactValue ?
        <a href={contactValue}>{contactValue}</a>
            : <span className={classes.noInfoContacts}>no information</span>}
    </div>
    );
}

 export default ProfileLinks;

