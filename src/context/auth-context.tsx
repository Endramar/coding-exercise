import React, { useEffect, useState } from 'react';
import { Address, Preferences, User } from '../models/profile/user';
import Users from '../assets/files/user.json';

const contextInitialValues:{
    isAuth : boolean,
    login : Function,
    userData : User,
    setUpdatedUserData : Function
} = {
    isAuth: false,
    login: () => {},
    userData : new User(),
    setUpdatedUserData : () => {}
  };

export const AuthContext = React.createContext(contextInitialValues);

const AuthContextProvider = (props:any) => {

  let user: User = new User();
  user.address = new Address();
  user.preferences = new Preferences();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData,setUserData] = useState(user);

  useEffect(()=> {
    let userData:User = Users.users[0];
    setUserData(userData);
  },[])

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  const userUpdateHandler = (user:User) => {
      setUserData(user);
  }

  return (
    <AuthContext.Provider
      value={{ login: loginHandler, isAuth: isAuthenticated , userData : userData , setUpdatedUserData : userUpdateHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;