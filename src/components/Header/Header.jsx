import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/social-connection-7-771032.png' alt='logo'/>
        </header>
    );
}
export default Header;