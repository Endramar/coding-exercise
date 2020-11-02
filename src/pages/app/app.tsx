import React, { useContext, useState, useCallback, Fragment } from 'react';
import classes from './layout.module.css';
import {AuthContext} from '../../context/auth-context';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';

function App() {

    const authContext = useContext(AuthContext);

    return <Fragment>
        {authContext.isAuth ? <Layout/> : <Login/>}
    </Fragment>
}

export default App;
