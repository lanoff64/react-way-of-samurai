import React from "react";
import classes from './Disc.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import UserPhoto from "./../../../assets/images/no-user-26.jpg"

const Description = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.avaAndDesc}>
            <div className={classes.ava}>
                <img src={props.profile.photos.large ? props.profile.photos.large: UserPhoto}/>
            </div>
            <div className={classes.about}>
                <div className={classes.userDecsName}>{props.profile.fullName}</div>
                <div className={classes.divDescLabel}>ID: {props.profile.userId}</div>
                <div className={classes.divDesc}>
                    <div><span className={classes.divDescLabel}>О себе:</span> {props.profile.aboutMe}</div>
                    <div><span
                        className={classes.divDescLabel}>Ищет работу:</span> {props.profile.lookingForAJobDescription}
                    </div>
                    <div><span className={classes.divDescLabel}>Links:</span>
                        <div className={classes.descLinks}>
                            <div>
                                {props.profile.contacts.facebook}
                            </div>
                            <div>
                                {props.profile.contacts.website}
                            </div>
                            <div>
                                {props.profile.contacts.vk}
                            </div>
                            <div>
                                {props.profile.contacts.twitter}
                            </div>
                            <div>
                                {props.profile.contacts.instagram}
                            </div>
                            <div>
                                {props.profile.contacts.youtube}
                            </div>
                            <div>
                                {props.profile.contacts.github}
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className={classes.divDescLabel}>
                            Phone:
                        </span>
                        {props.profile.lookingForAJob ? '88005553535':'скрыто'}
                    </div>


                </div>
            </div>

        </div>

    );
}
export default Description;