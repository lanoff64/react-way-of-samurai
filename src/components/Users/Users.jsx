import React from "react";
import classes from './Users.module.css'
import * as axios from "axios";
import UserPhoto from "../../assets/images/user.png"

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })

        }
    }

    render(){
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map(u => <div key={u}>
                    <span>
                        <div><img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                  className={classes.avatarURL} alt=""/></div>
                        <div>
                            {
                                u.follow ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Follow</button> : <button onClick={() => {
                                    this.props.onFollow(u.id)
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

}

export default Users;
