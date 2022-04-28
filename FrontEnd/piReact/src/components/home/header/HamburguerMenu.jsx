import React, {useContext, useState, useEffect} from 'react'
import {useHistory, useLocation, Link, useNavigate} from "react-router-dom";
import useUser from '../../../hooks/useUser';
import UserData from './UserData';
import ContextData from '../../../context/userDataContext';

const HamburguerMenu = ({ fn }) => {

  const location = useLocation();
  const { logout, isLogged } = useUser()
  const { userName } = useContext(ContextData);
  const [role, setRole] = useState(0);
  const navigate = useNavigate();
  
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
    if (isLogged) {
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
    }
  }, [userName])

  return (
    <div class="hamburguer_menu hamburguer_menu_visible">
      <div class="dropdown_desktop">
        <div class="close_menu" href="cierreSesion" onClick={fn}>
          X
        </div>

        {/*Muestro y oculto según si el usuario está logueado o no*/}
        { isLogged ? ( 
        <div class="dropdown_login">
          <div class="avatar">
          <p className="initials">{userName.name.charAt(0).toUpperCase()}{userName.lastname.charAt(0).toUpperCase()}</p>
        </div>
        <div class="hi_username">
          <p class="hello">Hola,</p>
          <p class="username">{userName.name} {userName.lastname}</p>
        </div>
        </div>) : <h3>MENÚ</h3>}


      </div>

      <div class="entry_icons">

        {/*Muestro y oculto según si el usuario está logueado o no*/}       
        { isLogged ? (
          <div class="nav_login"> 
          { role == 2 ? (<a id="hamburguer_link" onClick={handleClickAdm}><h4 id="admin_reservations_button">Administración</h4></a>) : (<a id="hamburguer_link" onClick={handleClick}><h4>Mis reservas</h4></a>)}
          <div class="space"></div>
          <div class="nav_footer">
            <h5 class="close_option">
              ¿Deseas <Link to="/" onClick={logout}><span>cerrar sesión</span></Link>?
            </h5>
            <div class="line2"></div>
            </div>
          </div>
        ) : (
          <div class="entry">
            <Link to={"/createAccount"} onClick={fn}>Crear cuenta</Link> 
            <div class="line"></div>
            <Link to={"/login"} onClick={fn}>Iniciar sesión</Link>
          </div>
        ) }

        <span class="nav_social_networks">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </span>
      </div>
    </div>
  );
};

export default HamburguerMenu;
