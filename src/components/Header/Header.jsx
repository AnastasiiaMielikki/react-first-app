import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
          <img src='http://placekitten.com/g/50/50' alt="logo"></img>
        </header>
    )
}

export default Header;