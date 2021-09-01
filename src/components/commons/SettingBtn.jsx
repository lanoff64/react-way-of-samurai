import React from "react";
import settingBtnImg from "../.././assets/images/settingBtn.svg";
import classes from './SettingBtn.module.css'

const SettingBtn =(props)=>{
    return (

          <input
              disabled={props.isDownload}
              className={classes.backImgBtn}
              type="image" src={settingBtnImg}
              alt={'btn'}
                onClick={props.onClick}/>

    );
}
export default SettingBtn;