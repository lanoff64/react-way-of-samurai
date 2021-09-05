import React from "react";
import classes from './Disc.module.css';
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";

const PersonInfo = ({profile,status,updateStatus,...props}) => {
    debugger
    return (

            <div className={classes.about}>


                    <ProfileStatusHooks status={status} updateStatus={updateStatus} />

                    <div className={classes.links}>
                        <span>Links:</span>
                          {Object.keys(profile.contacts).map(key =>
                        <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    )}
                    </div>


                <div className={classes.divDesc}>
                    <div><span className={classes.divDescLabel}>О себе:</span> {profile.aboutMe}</div>
                    <div><span
                        className={classes.divDescLabel}>Ищет работу:</span> {profile.lookingForAJobDescription}
                    </div>

                    <div>
                        <span className={classes.divDescLabel}>
                            Phone:
                        </span>
                        {profile.lookingForAJob ? '88005553535' : 'скрыто'}
                    </div>

                </div>
            </div>


    );
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.contacts}> <b>{contactTitle}</b>: <a href={`https://${contactValue}`}>{contactValue}</a></div>
}


export default PersonInfo;