import React from "react";
import classes from './Profile.module.css';
import Description from "./Description/Description";
// import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
//import ProfileStatus2 from "./ProfileStatus/ProfileStatus2";
//import AboutMe from "./Description/AboutMe/AboutMe";


const Profile = ({...props}) => {

    return (
        <div>
            {/*<Wallpaper/>*/}
            <div className={classes.afterWall}>
                <Description {...props} isOwner={props.isOwner} profile={props.profile}/>
                {/*<AboutMe about={props.about} updateUserAbout={props.updateUserAbout}/>*/}
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
                {/*<ProfileStatus2/>*/}
                <MyPostsContainer/>
            </div>


        </div>

    );
}
export default Profile;