import React from "react";
import classes from './Profile.module.css';
import Description from "./Description/Description";
import Wallpaper from "./Wallpaper/Wallpaper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const Profile = (props) => {

    return (
        <div>
            <Wallpaper/>
            <div className={classes.afterWall}>
                <Description profile={props.profile}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <MyPostsContainer/>
            </div>


        </div>

    );
}
export default Profile;