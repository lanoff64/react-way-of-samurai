import React from "react";
import classes from './Profile.module.css';
import Description from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../commons/Preloader/Preloader";



const Profile = ({...props}) => {


    return (
        <div className={classes.allProfile}>
            <div className={classes.afterWall}>

                {props.isDownload ?
                <Preloader/> :
                    <div>
                <Description saveContacts={props.saveContacts} {...props} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
                    </div>
                }
            </div>
        </div>
    );
}
export default Profile;