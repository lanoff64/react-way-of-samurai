import React from "react";
import classes from './Disc.module.css';
import UserPhoto from "./../../../assets/images/no-user-26.jpg"
import Preloader from "../../commons/Preloader/Preloader";
import SettingBtn from "../../commons/SettingBtn";


const PersonAvatar = ({profile, ...props}) => {

    let [editMode, setEditMode] = useToggle();

    const activeEditMode = () => {
        setEditMode();
    }

//переключатель на хуке
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
//значение src аватарки
    const imgSrc = profile.photos.large || UserPhoto;

    return (
            <div className={classes.avaImg} onDoubleClick={activeEditMode} >
                {/*значенеие isDownload меняется перед запросом и сразу после
                получения аватарки*/}
                {props.isDownload ? <div className={classes.loading}><Preloader/></div> : <img src={imgSrc} alt="avatar"/>}
                <div className={classes.settingBtn}>
                 <SettingBtn />
                </div>
                {!editMode && null}
                {editMode &&
                    <div>
                        <div className={classes.selectImg}> </div>
                        <div className={classes.avatarInp} >
                            {props.isOwner ? <input disabled={props.isDownload} type="file" onChange={onMainPhotoSelected}/> : null}
                        </div>
                    </div>}
            </div>


    );

}
export default PersonAvatar;