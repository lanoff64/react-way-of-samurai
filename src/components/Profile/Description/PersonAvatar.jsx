import React, {useState} from "react";
import classes from './Disc.module.css';
import UserPhoto from "./../../../assets/images/no-user-26.jpg"


const PersonAvatar = ({profile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    const activeEditMode = () => {
        setEditMode(true);
    }
    const deActiveEditMode = () => {
        setEditMode(false);
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0]);
            setEditMode(false);
        }
    }

    const imgSrc = profile.photos.large || UserPhoto;

    return (

            <div className={classes.avaImg} onDoubleClick={activeEditMode} onClick={deActiveEditMode}>
                {props.isDownload ? <div className={classes.loading}>...loading</div> : <img src={imgSrc} alt="avatar"/>}
                {!editMode && null}
                {editMode &&
                    <div>
                {props.isOwner ? <input disabled={props.isDownload} type="file" onChange={onMainPhotoSelected}/> : null}
                    </div>}
            </div>


    );
}
export default PersonAvatar;