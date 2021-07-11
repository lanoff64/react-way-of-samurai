import React from "react";
import classes from './Users.module.css'
import * as axios from "axios";
import UserPhoto from "../../assets/images/user.png"

const Users = (props) => {
    let getUsers = () =>
    {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
                props.setUsers(response.data.items)
            })

        }
    }


    return (
        <div>
            <button onClick={getUsers} >Get Users</button>
            {
                props.users.map(u=><div key={u}>
                    <span>git
                        <div><img src={u.photos.small != null ? u.photos.small : UserPhoto  } className={classes.avatarURL} alt=""/></div>
                        <div>
                            {
                                u.follow ? <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> : <button onClick={()=>{props.onFollow(u.id)}}>Unfollow</button>
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
