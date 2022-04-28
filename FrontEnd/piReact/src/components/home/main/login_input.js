import React from 'react'; // Importo React.
import '../../../styles/__forms.css'; // Importo los estilos CSS.
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'; //Importo ícono de FontAwesome.

export default function Login_input (props) {
    
    let label = "";
    const {passwordVisiblity, handleChange} = props

    // Según las props se elige el label.
    switch (props.type) { 
        case "password":
            label = "Contraseña";
            break;
        case "text":
            label = "Contraseña";
            break;
        case "email":
            label = "Correo electrónico";
            break;
        default:
            break;
    }

    // Input
    return (<>
        <label className="label-form">
            {label}<span className="asterisk_input"></span>   
            <input onChange={handleChange} type={props.type} name={props.type} id={props.type} className="input-form"required/>  {props.type !== "email" ? <FontAwesomeIcon className="passwordIcon lo" icon={faEyeSlash} onClick={passwordVisiblity}/> : ""}
        </label>
    </>)
} 