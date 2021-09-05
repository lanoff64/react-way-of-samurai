import React from "react";
import classes from './Disc.module.css';
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

const PersonInfo = ({profile,status,updateStatus,...props}) => {

    return (
            <div className={classes.about}>
                    <ProfileStatusHooks status={status} updateStatus={updateStatus} />

                    <div className={classes.links}>
                        <ProfileLinks profile={profile}/>
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



export default PersonInfo;