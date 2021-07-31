import React from "react";
import classes from './Users.module.css'
import UserPhoto from "../../assets/images/no-user-26.jpg"
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={classes.samurai}>
                Users from <a href="https://social-network.samuraijs.com/">social-network.samuraijs.com</a>
            </div>
            <div className={classes.pages}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? classes.selectedPage : undefined}
                        key={p.toString()}
                        onClick={(event) => {
                            props.onPageClick(p);
                        }}>{p}</span>
                })}
            </div>
            <div className={classes.usersList}>
                {
                    props.users.map(u => <div className={classes.oneUser} key={u.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                         className={classes.avatarURL} alt=""/>
                                </NavLink>
                            </div>
                            <div>

                                {
                                    u.followed ?

                                    <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                            className={classes.userButton} onClick={() => {

                                          props.unfollow(u.id)

                                    }}>Unfollow </button>

                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                            className={classes.userButton} onClick={() => {

                                            props.follow(u.id)

                                    }}>Follow</button>
                                }

                            </div>

                        </div>

                        <div className={classes.userInfo}>
                            <div className={classes.userNameArea}>
                                Name: {u.name}
                            </div>
                            <div>
                                <div className={classes.userIdArea}>id:{u.id}</div>
                            </div>


                            <div className={classes.userStatusArea}>

                                {u.status != null ? u.status : null}

                            </div>
                        </div>

                    </div>)
                }
            </div>
            <div className={classes.pages}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? classes.selectedPage : undefined}
                        key={p.toString()}
                        onClick={(event) => {
                            props.onPageClick(p);
                        }}>{p}</span>
                })}
            </div>
        </div>

    );

}

export default Users;
