import React from "react";
import classes from './Disc.module.css';
import UserPhoto from "./../../../assets/images/no-user-26.jpg"
import Preloader from "../../commons/Preloader/Preloader";
import SettingBtn from "../../commons/SettingBtn";
import useToggle from "../../commons/useToggle";


const PersonAvatar = ({profile, ...props}) => {
    //переключатель на хуке
    let [editMode, setEditMode] = useToggle();

    const editModeToggle = () => {
        setEditMode();
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0]);
            editModeToggle();
        }
    }
//значение src аватарки
    const imgSrc = profile.photos.large || UserPhoto;
    //значенеие isDownload меняется перед запросом и сразу после получения аватарки
    //при клике вкл. едит мод-file input
    //если едит мод не включен, ничего не показывай
    //иначе осветлить фон и если владелец показать кнопку
    //кнопка не доступна если идет загрузка
    //кнопка для отмены

    return (
        <div className={classes.avaImg}>
            {props.isDownload ?
                <div className={classes.loading}>
                    <Preloader/>
                </div> :
                <img src={imgSrc} alt="avatar"/>}
            {props.isOwner ?
                <div className={classes.settingBtn} >
                    <SettingBtn isDownload={props.isDownload} onClick={editModeToggle}/>
                </div> : null}
            {!editMode && null}
            {editMode &&
            <div>
                <div className={classes.selectImg}> </div>
                <div className={classes.avatarInp}>
                    {props.isOwner ?
                        <input type="file" onChange={onMainPhotoSelected}/> : null}
                        <input type="button" onClick={editModeToggle} value={'отмена'}/>
                </div>
            </div>}

        </div>
    );
}
export default PersonAvatar;