import React from 'react'
import { useLocation } from "react-router-dom";
import UserEntry from "./UserEntry";
import UserData from "./UserData";
import useUser from "../../../hooks/useUser"

export default function Nav_function() {
    const { isLogged, login } = useUser()

    return (<>
        {
            isLogged
                ?
                <UserData />
                :
                <UserEntry />
        }
    </>);
}