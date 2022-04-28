import { useState, useEffect, useContext } from 'react'; // Importo React y componentes a usar.
import Swal from 'sweetalert2'; // Importo SweetAlert
import '../../../styles/__forms.css'; // Importo los estilos CSS.
import Input from './login_input.js'; // Importo el componente para los inputs.
import Button from './login_button.js'; // Importo el componente para el botón.
import { Link, useNavigate } from "react-router-dom"; // Importo los componentes de React Router.
import useUser from '../../../hooks/useUser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import ContextData from '../../../context/userDataContext';
import axios from 'axios';

function Login(props) {

    const navigation = useNavigate()

    const [errorPassword, setErrorPassword] = useState("")
    const [type, setType] = useState("password")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { hasLoginError, login, isLogged } = useUser()
    const { setUsername } = useContext(ContextData);
    const url = `http://18.190.58.41:8080/users/mail/${email}`

    // Guardo lo que el usuario va escribiendo. 
    const handleChange = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value)
            setUsername(event.target.value)
        } else if (event.target.type === "password" || event.target.type === "text") {
            setPassword(event.target.value)
            setErrorPassword(event.target.value.length <= 6 && event.target.value.length !== 0 ? "La contraseña debe tener más de 6 caracteres." : "")  // Valido la longitud de la contraseña y muestro cartel de error.
        }
    }

    // Muestro y oculto la contraseña.
    const passwordVisiblity = () => {
        type === "password" ? setType("text") : setType("password");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(url)
        .then(response => {
            window.localStorage.setItem('userName', response.data.mail)
            setUsername({name: response.data.name, lastname: response.data.last_name, mail: response.data.mail})
        })
        .catch((err) => {
            console.log(err)
        })

        if (password.length > 6) {
            const username = email
            login({ username, password });
        }

    }


    useEffect(() => {
        if (isLogged) {
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido!',
                confirmButtonColor: '#0498bd'
            });
            navigation("/")
        }
    }, [isLogged, navigation])

    // Renderizo Formulario
    return (<>
        <form name="formLogin" onSubmit={handleSubmit} className="form-login">
            <h1 className="title-form">Iniciar sesión</h1>

            <Input handleChange={handleChange} type="email" />
            <Input handleChange={handleChange} passwordVisiblity={passwordVisiblity} type={type} />

            <Button />

            <p className="createAcount">¿Aún no tenes cuenta?<Link className="input-createAcount" to="/createAccount"><span className="span-form"> Registrate</span></Link></p>

            {<div className="errorLogin">{errorPassword}</div>}
            {hasLoginError && <p className="LoginErrorApi"><FontAwesomeIcon icon={faExclamationCircle}/> Por favor, vuelva a intentarlo. Sus credenciales son inválidas</p>}
        </form>
    </>)
}

export default Login;