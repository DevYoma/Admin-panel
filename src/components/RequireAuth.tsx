import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

type RequireAuthProp = {
    children: any;
}

const RequireAuth = ({ children }: RequireAuthProp) => {

    const authContext = useContext(AuthContext);
    const { currentUser } = authContext;
  return currentUser ? children : <Navigate to={'/login'}/>
}

export default RequireAuth