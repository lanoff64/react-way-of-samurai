import React from "react";
import classes from './Profile.module.css';
import Description from "./Description/Description";
// import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
//import AboutMe from "./Description/AboutMe/AboutMe";


const Profile = (props) => {

    return (
        <div>
            {/*<Wallpaper/>*/}
            <div className={classes.afterWall}>
                <Description profile={props.profile}/>
                {/*<AboutMe about={props.about} updateUserAbout={props.updateUserAbout}/>*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <MyPostsContainer/>
            </div>


        </div>

    );
}
export default Profile;