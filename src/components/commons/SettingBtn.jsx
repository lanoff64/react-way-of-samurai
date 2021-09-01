import React from "react";
import settingBtnImg from "../.././assets/images/settingBtn.svg";
import classes from './SettingBtn.module.css'

const SettingBtn =()=>{
    return (
      <div>
          <input className={classes.backImgBtn} type="image" src={settingBtnImg} alt={'btn'}/>
      </div>  
    );
}
export default SettingBtn;