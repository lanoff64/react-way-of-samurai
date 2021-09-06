import React, {useState} from "react";
import classes from './Disc.module.css';
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";
import AboutSelf from "../AboutSelf/AboutSelf";
import LinksForm from "../ProfileLinks/LinksForm";

const PersonInfo = ({profile, status, updateStatus,saveContacts, ...props}) => {

    const [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true);
    }
    const outEditMode = () => {
        setEditMode(false);
    }

    return (
        <div className={classes.about}>

            <ProfileStatusHooks status={status} updateStatus={updateStatus}/>

            <div className={classes.linksOrForm}>
                <span>Links:</span>
                {editMode ? <LinksForm saveContacts={saveContacts} outEditMode={outEditMode} profile={profile}/> :
                    <ProfileLinks goToEditMode={goToEditMode} isOwner={props.isOwner} profile={profile}/>}
            </div>

            <AboutSelf profile={profile}/>

        </div>
    );
}
export default PersonInfo;