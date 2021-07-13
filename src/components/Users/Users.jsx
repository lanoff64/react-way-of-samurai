import React from "react";
import classes from './Users.module.css'
import * as axios from "axios";
import UserPhoto from "../../assets/images/user.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount - 13200)
        })
    }

    onPageClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
        let pages = [];

        for(let i = 1; i<=pagesCount;i++){
            pages.push(i);
        }

        return (
            <div>

                <div>
                    {pages.map(p => {
                        return <span className={ this.props.currentPage === p && classes.selectedPage}
                        onClick={(event)=>{
                                this.onPageClick(p);
                        } }>{p}</span>
                    })}
                </div>
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
