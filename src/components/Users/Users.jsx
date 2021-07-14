import React from "react";
import classes from './Users.module.css'
import UserPhoto from "../../assets/images/user.png"

const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
        let pages = [];

        for(let i = 1; i<=pagesCount;i++){
            pages.push(i);
        }

        return (
            <div>

                <div>
                    {pages.map(p => {
                        return <span className={ props.currentPage === p && classes.selectedPage}
                        onClick={(event)=>{
                                props.onPageClick(p);
                        } }>{p}</span>
                    })}
                </div>
                {
                    props.users.map(u => <div key={u}>
                    <span>
                        <div><img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                  className={classes.avatarURL} alt=""/></div>
                        <div>
                            {
                                u.follow ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Follow</button> : <button onClick={() => {
                                    props.onFollow(u.id)
                                }}>Unfollow</button>
                            }
                        </div>

                    </span>

                        <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                    <span>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </span>
                    </span>
                    </div>)
                }
            </div>

        );

}

export default Users;
