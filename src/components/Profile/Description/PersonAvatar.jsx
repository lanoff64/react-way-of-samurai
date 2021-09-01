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
                   <div className={classes.avaImg} >
                {/*значенеие isDownload меняется перед запросом и сразу после
                получения аватарки*/}
                {props.isDownload ?
                    <div className={classes.loading}><Preloader/></div> :

                    <img src={imgSrc} alt="avatar"/>
                }
                       {/*{при клике вкл едит мод-file input  }*/}
                       {props.isOwner?
                <div className={classes.settingBtn} onClick={activeEditMode}>
                 <SettingBtn />
                </div>
                           :
                           null}
                       {/*если едит мод не включен, ничего не показывай*/}
                {!editMode && null}
                       {/*иначе осветлить фон..*/}
                {editMode &&
                    <div>
                        <div className={classes.selectImg}> </div>
                        {/*...и если владелец показать кнопку*/}
                        <div className={classes.avatarInp} >
                            {/*кнопка не доступна если идет загрузка*/}
                            {props.isOwner ? <input disabled={props.isDownload} type="file" onChange={onMainPhotoSelected}/> : null}
                            {/*кнопка для отмены*/}
                            <input type="button" onClick={activeEditMode} value={'отмена'}/>
                        </div>
                    </div>}
            </div>


    );

}
export default PersonAvatar;