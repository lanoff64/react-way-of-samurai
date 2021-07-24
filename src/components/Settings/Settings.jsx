import React from 'react';
import classes from './Settings.module.css'
import {profileAPI} from "../../api/api";

const uploadPhoto = () => {
    let formData = new FormData();
    let imageFile = document.querySelector('#photo');
    formData.append("image", imageFile.files[0]);
    profileAPI.sendPhoto(formData)
        .then(res => console.log(res.data))
}


const Settings = (props) => {
    return (
        <div className={classes.settings}>

            <p>Settings</p>
            <input type="file" id="photo"/>


            <button onClick={uploadPhoto} >Отправить</button>
        </div>
    );

}
export default Settings;
