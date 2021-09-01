import React, {useState} from "react";
import classes from './Disc.module.css';
import Preloader from "../../commons/Preloader/Preloader";
import UserPhoto from "./../../../assets/images/no-user-26.jpg"


const Description = ({profile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    const activeEditMode = () => {
        setEditMode(true);
    }



    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0]);
            setEditMode(false);
        }
    }

    const imgSrc = profile.photos.large || UserPhoto;

    return (
        <div className={classes.avaAndDesc} onClick={()=>setEditMode(false)}>
            <div className={classes.ava} onDoubleClick={activeEditMode}>
                {props.isDownload ? <div className={classes.loading}>...loading</div> : <img src={imgSrc} alt="avatar"/>}

                {!editMode && null}
                {editMode &&
                    <span>
                {props.isOwner ? <input disabled={props.isDownload} type="file" onChange={onMainPhotoSelected}/> : null}
                    </span>}
            </div>

            <div className={classes.about}>
                <div className={classes.userDecsName}>{profile.fullName}</div>
                <div className={classes.divDescLabel}>ID: {profile.userId}</div>


                <div className={classes.divDesc}>
                    <div><span className={classes.divDescLabel}>О себе:</span> {profile.aboutMe}</div>
                    <div><span
                        className={classes.divDescLabel}>Ищет работу:</span> {profile.lookingForAJobDescription}
                    </div>
                    <div><span className={classes.divDescLabel}>Links:</span>
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
export default Description;