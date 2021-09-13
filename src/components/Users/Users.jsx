import React from "react";
import classes from './Users.module.css'
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";

const Users = ({unfollow,follow,followingInProgress,currentPage,onPageClick,totalUsersCount,pagesSize,users,...props}) => {
    return (
        <div>
            <div className={classes.usersAndPaginator}>


            <div className={classes.samurai}>
                Users from <a href="https://social-network.samuraijs.com/">social-network.samuraijs.com</a>
            </div>
            <Paginator
                currentPage={currentPage}
                onPageClick={onPageClick}
                totalItemsCount={totalUsersCount}
                pagesSize={pagesSize}
            />
            </div>
            <div className={classes.usersList}>
                {       users.map(u => <User
                        user={u}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow}
                        key={u.id}/>)
                }
            </div>
        </div>
    );
}

export default Users;
