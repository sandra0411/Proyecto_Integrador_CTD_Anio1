import React, { useContext, useEffect, useState } from 'react'
import useUser from '../../../hooks/useUser'
import ContextData from '../../../context/userDataContext';
import { ImExit } from "react-icons/im";
import '../../../styles/__header.css';
import { useNavigate} from 'react-router';


const UserData = ({ props }) => {
  const { logout, isLogged } = useUser()
  const { userName } = useContext(ContextData);
  const navigate = useNavigate();
  const [role, setRole] = useState(0);
  const handleClick = () => {
    if (isLogged){
        return navigate("/my_reservations")
    }
    else{
        return navigate('/login')
    }
  }
  const handleClickAdm = () => {
    if (isLogged){
        return navigate("/administration")
    }
    else{
        return navigate('/login')
    }
  }
  useEffect(() => {
    console.log("a ver...")
    console.log(userName)
    fetch(`http://18.190.58.41:8080/users/mail/${userName.mail}`, {method: "GET"})
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(user => {
      console.log("¿Por qué no quiere andar?")
      console.log(user)
      console.log(user.role)
      console.log(user.role.id)
      setRole(user.role.id)
    })
  }, [userName])

  return (

    <div class="user_data" >
      <div>
        {role == 2 ? <a onClick={handleClickAdm}><h2 id="admin_reservations_button">Administración</h2></a> : <a onClick={handleClick}><h2>Mis reservas</h2></a>}
      </div>
      <div class="avatar">
        <p className="initials">{userName.name.charAt(0).toUpperCase()}{userName.lastname.charAt(0).toUpperCase()}</p>
      </div>
      <div class="hi_username">
        <p class="hello">Hola,</p>
        <p class="username">{userName.name} {userName.lastname}</p>
      </div>

      <button class="logout" onClick={logout}><ImExit/></button>
    </div>

  )
}

export default UserData