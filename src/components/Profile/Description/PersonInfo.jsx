import React, {useState} from "react";
import classes from './Disc.module.css';
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";
import AboutSelf from "../AboutSelf/AboutSelf";
import LinksForm from "../ProfileLinks/LinksForm";

const PersonInfo = ({profile,status,updateStatus,...props}) => {

const [editMode, setEditMode] = useState(false);

const goToEditMode = () =>{
    setEditMode(true);
}
const outEditMode = () => {
    setEditMode(false);
}

    return (
            <div className={classes.about}>

                    <ProfileStatusHooks status={status} updateStatus={updateStatus} />

                {editMode ? <LinksForm outEditMode={outEditMode} profile={profile}/> : <ProfileLinks goToEditMode={goToEditMode} isOwner={props.isOwner} profile={profile}/>}

                    <AboutSelf profile={profile}/>

            </div>
    );
}
export default PersonInfo;