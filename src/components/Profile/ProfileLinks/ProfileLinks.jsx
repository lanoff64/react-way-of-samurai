import classes from "../Description/Disc.module.css";
import React from "react";


const ProfileLinks = ({profile, isOwner,goToEditMode}) => {

    return(
        <div className={classes.profileLinks}>
            <div className={classes.nameField}>


                {Object.keys(profile.contacts).map(key =>
                    <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )}

            </div>


                {isOwner &&
                    <div className={classes.editBtnGrid}>
                        <button className={classes.editBtn} onClick={goToEditMode}>Edit</button>
                    </div>
                }

        </div>

    )
 }



const Contacts = ({contactTitle, contactValue}) => {
    return (
    <div className={classes.contacts}>
        {contactTitle}:
        <div className={classes.contactsValues}>
            {contactValue ?
                <a href={contactValue}>{contactValue}</a>
                : <span className={classes.noInfoContacts}>no information</span>}
        </div>

    </div>
    );
}

 export default ProfileLinks;

