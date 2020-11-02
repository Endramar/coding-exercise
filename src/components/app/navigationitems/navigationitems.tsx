import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigationitems.module.css';

function NavigationItems(){
    return <ul className={classes.NavigationItems}>
      <NavLink to="/" exact className={classes.NavigationItem} activeClassName={classes.Active}>Home</NavLink>
      <NavLink to="/profile" className={classes.NavigationItem} activeClassName={classes.Active}>Profile</NavLink>
      <NavLink to="/about" className={classes.NavigationItem} activeClassName={classes.Active}>About</NavLink>
      <NavLink to="/contact" className={classes.NavigationItem} activeClassName={classes.Active}>Contact</NavLink>
    </ul>
}

export default NavigationItems;