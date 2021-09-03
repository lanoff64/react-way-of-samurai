import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
//import Preloader from "../commons/Preloader/Preloader";
import UserPhoto from "../../assets/images/no-user-26.jpg";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headLogo}>
                <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/social-connection-7-771032.png' alt='logo'/>
            </div>

            <div>
                {props.profile ?
                    <div className={classes.loginBlock}>
                        <div className={classes.userLogin}>
                            {props.login}
                            {/*{' '}(id:{props.id})*/}
                        </div>

                        <div className={classes.avaLogin}>
                            <img src={props.profile.photos.small ? props.profile.photos.small : UserPhoto}
                                 alt="avatar"/>
                        </div>
                        <div className={classes.outBtn}>
                            <button onClick={props.logoutThunk}>Выйти</button>
                        </div>
                    </div>
                    : <div className={classes.loginBlock}>
                        <NavLink to={"/login"}>Login</NavLink>
                        <img src={UserPhoto} alt="avatar"/>

                    </div>}


            </div>

        </header>
    );


}
export default Header;