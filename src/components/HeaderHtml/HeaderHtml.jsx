import React from 'react';
import classes from './HeaderHtml.module.css';
import UserPhoto from "../../assets/images/no-user-26.jpg";
import {NavLink} from "react-router-dom";
const HeaderHtml = (props) => {
    return (
        <div>
            <div className={classes.wr1}>
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
            </div>
        </div>
    );
};

export default HeaderHtml;