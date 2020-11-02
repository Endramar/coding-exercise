import React, { useCallback, useState, useContext } from 'react';
import classes from './login.module.css';
import { AuthContext } from '../../context/auth-context';
import Input from '../../components/ui/input/input';
import Button from '../../components/ui/button/button';

function Login() {

    const authContext = useContext(AuthContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isWrongUser, setIsWrongUser] = useState(false);


    const onUserNameChange = useCallback((event) => {
        setIsWrongUser(false);
        setUserName(event.target.value);
    }, []);

    const onPasswordChange = useCallback((event) => {
        setIsWrongUser(false);
        setPassword(event.target.value);
    }, []);

    const loginHandler = () => {
        const dummyUsername = 'xerini';
        const dummyPassword = 'xerini';

        if (userName === dummyUsername && password === dummyPassword) {
            authContext.login();
        }
        else {
            setIsWrongUser(true);
        }
    };

 
    return <div className={classes.LoginContainer}>
        <div className={classes.InputWrapper}>
            <Input label="User Name"  placeholder="Enter user name here" onChange={onUserNameChange} type="text"></Input>
        </div>
        <div className={classes.InputWrapper}>
            <Input label ="Password" placeholder="Enter password here" onChange={onPasswordChange} type="password"></Input>
        </div>
        <div>
            {
                isWrongUser ? <span className={classes.WarningText}>Your username or password is wrong plase try again!</span> : null
            }
        </div>
        <div className={classes.InputWrapper}>
            <Button type="button" onClick={loginHandler}>Login</Button>
        </div>
    </div>
}

export default Login