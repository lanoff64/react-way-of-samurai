import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    let way = "/dialogs/" + props.id;

    return (
        <div className={classes.user}>

            <NavLink activeClassName={classes.activeLink} to={way}>
               <div className={classes.avatar}><img src={props.avatar} alt='avatar'/></div>
               <div className={classes.name}>{props.name}</div>
            </NavLink>

        </div>
    );
}
export default UserDialog;
