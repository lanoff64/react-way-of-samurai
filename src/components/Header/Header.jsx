import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://www.europanostra.org/wp-content/uploads/2017/09/2017-09-Twitter-logo.png' alt='logo'/>
        </header>
    );
}
export default Header;