import React from "react";
import classes from './Users.module.css'
import UserPhoto from "../../assets/images/no-user-26.jpg"
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes.oneUser}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : UserPhoto}
                         className={classes.avatarURL} alt=""/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={classes.userButton} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow </button>

                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={classes.userButton} onClick={() => {
                            follow(user.id)

                        }}>Follow</button>
                }

            </div>

            <div className={classes.userInfo}>
                <div className={classes.userNameArea}>
                    Name: {user.name}
                </div>
                <div>
                    <div className={classes.userIdArea}>id:{user.id}</div>
                </div>

                <div className={classes.userStatusArea}>
                    {user.status != null ? user.status : null}
                </div>
            </div>

        </div>
    )
}

export default User;
