import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
//import Preloader from "../commons/Preloader/Preloader";
import UserPhoto from "../../assets/images/no-user-26.jpg";

const Header = (props) => {

    if (!props.profile) {
        return  (
            <header className={classes.header}>
                <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/social-connection-7-771032.png' alt='logo'/>

                <div className={classes.loginBlock}>

                    <NavLink to={"/login"}>Login</NavLink>

                    <div className={classes.avaLogin}>
                        <img src={UserPhoto} alt="avatar"/>
                    </div>
                </div>


            </header>
        )
    }

    return (
        <header className={classes.header}>
            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/social-connection-7-771032.png' alt='logo'/>

            <div className={classes.loginBlock}>
                {props.login}


                <div className={classes.avaLogin}>
                    <img src={props.profile.photos.small ? props.profile.photos.small: UserPhoto} alt="avatar"/>
                </div>
                <div> {props.id}</div>
            </div>


        </header>

    );
}
export default Header;