import React from 'react';
import classes from './layout.module.css';
import NavigationItems from '../../components/app/navigationitems/navigationitems';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Profile from '../profile/profile';

function Layout() {
  return (
    <div className={classes.LayoutContainer}>
      <header className={classes.Header}>
        <NavigationItems />
      </header>
      <main className={classes.Main}>
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/profile" component={Profile} ></Route>
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
