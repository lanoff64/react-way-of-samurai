import React from "react";
import classes from './Profile.module.css';
import Description from "./Description/Description";
// import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

//import ProfileStatus2 from "./ProfileStatus/ProfileStatus2";
//import AboutMe from "./Description/AboutMe/AboutMe";


const Profile = ({...props}) => {

    return (
        <div className={classes.allProfile}>
            <div className={classes.afterWall}>
                <Description {...props} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}
export default Profile;