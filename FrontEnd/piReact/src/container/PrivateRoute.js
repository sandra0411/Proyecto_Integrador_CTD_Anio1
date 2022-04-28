import React from 'react';
import useUser from '../hooks/useUser';
import { Navigate} from 'react-router';


export default function PrivateRoute ({children}){

    const { isLogged } = useUser();

    return isLogged ? children : <Navigate to="/login"/>
    
}