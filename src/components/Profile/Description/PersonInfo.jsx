import React, {useState} from "react";
import classes from './Disc.module.css';
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";
import AboutSelf from "../AboutSelf/AboutSelf";
import LinksForm, {LinksFormFormikAbout} from "../ProfileLinks/LinksForm";

const PersonInfo = ({profile, status, updateStatus, saveContacts, ...props}) => {

    const [editMode, setEditMode] = useState(false);
    const [editModeAbout, setEditModeAbout] = useState(false);

    const goToEditMode = () => {
        setEditMode(true);
    }
    const outEditMode = () => {
        setEditMode(false);
    }
    const goToEditModeAbout = () => {
        setEditModeAbout(true);
    }
    const outEditModeAbout = () => {
        setEditModeAbout(false);
    }

    return (
        <div className={classes.about}>
            <ProfileStatusHooks isOwner={props.isOwner} status={status} updateStatus={updateStatus}/>
            <div className={classes.linksOrForm}>
                {editMode ?
                    <LinksForm profile={profile} initialValues={profile} saveContacts={saveContacts}
                               outEditMode={outEditMode}/>
                    :
                    <ProfileLinks goToEditMode={goToEditMode} isOwner={props.isOwner} profile={profile}/>}
            </div>

            {editModeAbout ?
                <LinksFormFormikAbout profile={profile} initialValues={profile} saveContacts={saveContacts}
                                      outEditMode={outEditModeAbout}/>
                :
                <AboutSelf goToEditModeAbout={goToEditModeAbout} isOwner={props.isOwner} profile={profile}/>
            }
        </div>
    );
}
export default PersonInfo;