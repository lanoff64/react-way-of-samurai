import React from "react";
import classes from './Disc.module.css';

const PersonInfo = ({profile,...props}) => {

    return (
        <div>

            <div className={classes.about}>

                <div>
                    <span className={classes.divDescLabel}>Links:</span>
                    <div className={classes.descLinks}>
                        <div>
                            {profile.contacts.facebook}
                        </div>
                        <div>
                            {profile.contacts.website}
                        </div>
                        <div>
                            {profile.contacts.vk}
                        </div>
                        <div>
                            {profile.contacts.twitter}
                        </div>
                        <div>
                            {profile.contacts.instagram}
                        </div>
                        <div>
                            {profile.contacts.youtube}
                        </div>
                        <div>
                            {profile.contacts.github}
                        </div>
                    </div>
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
        </div>


    );
}
export default PersonInfo;