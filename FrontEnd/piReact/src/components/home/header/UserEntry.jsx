import React from 'react'
import {Link, useLocation} from 'react-router-dom';


const UserEntry = ({ props }) => {
  const location = useLocation();

  const handleLocation = (location) => {
    if (location.pathname === ("/createAccount")) {
      return (
        <div className="user_entry">
          <Link to={"/login"}>Iniciar sesión</Link>
        </div>
      )
    } else if (location.pathname === "/login") {
      return (
        <div className="user_entry">
          <Link to={"/createAccount"}>Crear cuenta</Link>
        </div>
      )
    } else {
      return (
        <div className="user_entry">
          <Link to={"/createAccount"}>Crear cuenta</Link>
          <Link to={"/login"}>Iniciar sesión</Link>
        </div>
      )
    }
  }
  return (
    <>
    {handleLocation(location)}
    </>
  )
}

export default UserEntry;
