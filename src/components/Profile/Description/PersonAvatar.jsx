import React, {useState} from "react";
import classes from './Disc.module.css';
import UserPhoto from "./../../../assets/images/no-user-26.jpg"
import Preloader from "../../commons/Preloader/Preloader";


const PersonAvatar = ({profile, ...props}) => {

    let [editMode, setEditMode] = useToggle();

    const activeEditMode = () => {
        setEditMode();
    }

    function useToggle(initialValue = false) {
        const [value, setValue] = React.useState(initialValue);
        const toggle = React.useCallback(() => {
            setValue(v => !v);
        }, []);
        return [value, toggle];
    }



    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0]);
            setEditMode();
        }
    }

    const imgSrc = profile.photos.large || UserPhoto;

    return (
            <div className={classes.avaImg} onDoubleClick={activeEditMode} >
                {props.isDownload ? <div className={classes.loading}><Preloader/></div> : <img src={imgSrc} alt="avatar"/>}
                {!editMode && null}
                {editMode &&
                    <div className={classes.avatarInp}>
                {props.isOwner ? <input disabled={props.isDownload} type="file" onChange={onMainPhotoSelected}/> : null}
                    </div>}
            </div>


    );

}
export default PersonAvatar;