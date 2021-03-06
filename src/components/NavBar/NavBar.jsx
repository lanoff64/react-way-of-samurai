import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import UserDialog from "../Dialogs/UserDialog/UserDialog";

const NavBar = (props) => {
    let mapFriend = props.state.map(friend =>
        <UserDialog name={friend.name} key={friend.id} id={friend.id} avatar={friend.avatar}/>);
    return (
        <nav className={classes.nav}>
            <div className={classes.navAndFriends}>
            <div className={classes.navMargin}>
                <div className={classes.item}><NavLink to='/profile' activeClassName={classes.activeLink}>
                    Profile</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.activeLink}>
                    Messages</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/news' activeClassName={classes.activeLink}>
                    News</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/music' activeClassName={classes.activeLink}>
                    Music</NavLink>
                </div>
                <div className={`${classes.item} ${classes.settings}`}><NavLink to='/settings'
                                                                                activeClassName={classes.activeLink}>
                    Settings</NavLink>
                </div>

                <div  className={classes.users}>
                    <NavLink to='/users' activeClassName={classes.activeLink}>
                        Users
                    </NavLink>
                </div>

                <div className={`${classes.item} ${classes.friends}`}>
                    FRIENDS

                </div>
            </div>
            {mapFriend}

            </div>
        </nav>
    );
}
export default NavBar;