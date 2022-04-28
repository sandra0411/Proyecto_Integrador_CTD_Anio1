import React, { useEffect, useState, useContext } from 'react'
import Swal from 'sweetalert2';
import useForm from '../../../hooks/useForm';
import validate from './validateInputs'
import '../../../styles/__forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import { useNavigate } from 'react-router';
import ContextData from '../../../context/userDataContext';


const FormCreateAccount = () => {
    const { sendForm, handleChange, values, handleSubmit, errors, togglePasswordVisiblity, passwordShown, togglePasswordVisiblity2, passwordShown2 } = useForm(validate);
    const { login, isLogged } = useUser()
    const navigate = useNavigate()
    const [account, setAccount] = useState(true)
    const { setUsername } = useContext(ContextData);


    let data = {};
    let settings = {};
    let URL = 'http://18.190.58.41:8080/users';

    const handleClick = () => { // #38 Conectar formulario de registro con API de usuario

        console.log(sendForm)
        data = {
            name: values.name,
            last_name: values.lastName,
            mail: values.email,
            password: values.password,
            role: {
                id: 1,
            }
        }
        settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(URL, settings)
            .then(response => {
                if (response.ok) {
                    if (account) {
                        const username = values.email
                        const password = values.password
                        login({ username, password })
                        setUsername({ name: values.name, lastname: values.lastName, mail: values.email })
                        Swal.fire({
                            icon: 'success',
                            title: "Se ha registrado correctamente",
                            confirmButtonColor: '#0498bd'
                        })
                    }
                    response.text()
                }
                else {
                    Swal.fire({
                        icon: 'warning',
                        toast: true,
                        position: 'top',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        title: `<h5 style='color:#FFFFFF; font-weight: lighter'>El mail ingresado corresponde a un usuario ya registrado.</h5>`,
                        background: '#0498bd', 
                        iconColor: '#FFFFFF',
                    })     
                }
            })
            .then(finalResponse => finalResponse ? console.log(finalResponse) : {})
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (isLogged) {
            navigate(-1)
        }
    }, [isLogged, navigate])

    return (
        <div>
            <form class="form-create-account" name="formCreateAcount" onSubmit={handleSubmit}>
                <h1 class="title-form">Crear cuenta</h1>

                <div className="information">
                    <label htmlFor="name" className="label-form text">
                        Nombre<span class="asterisk_input"></span>
                        <input className="input-form" type="text" name="name" id="name" value={values.name} onChange={handleChange} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </label>
                    <label htmlFor="lastName" className="label-form text">
                        Apellido<span className="asterisk_input"></span>
                        <input className="input-form" type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange} />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </label>
                </div>

                <label htmlFor="email" className="label-form">
                    Correo electrónico<span className="asterisk_input"></span>
                    <input className="input-form" type="email" name="email" id="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </label>
                <label htmlFor="confirmEmail" className="label-form">
                    Confirmar correo electrónico<span className="asterisk_input"></span>
                    <input className="input-form" type="email" name="confirmEmail" id="confirmEmail" value={values.confirmEmail} onChange={handleChange} />
                    {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
                </label>

                <label htmlFor="password" className="label-form">
                    Contraseña<span className="asterisk_input"></span>
                    <input className="input-form" type={passwordShown ? "text" : "password"} name="password" id="password" value={values.password} onChange={handleChange} />
                    <FontAwesomeIcon className="passwordIcon ca" icon={faEyeSlash} onClick={togglePasswordVisiblity} />
                    {errors.password && <p className="error">{errors.password}</p>}
                </label>
                <label htmlFor="confirmPassword" className="label-form">
                    Confirmar contraseña<span className="asterisk_input"></span>
                    <input className="input-form" type={passwordShown2 ? "text" : "password"} name="confirmPassword" id="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                    <FontAwesomeIcon className="passwordIcon ca" icon={faEyeSlash} onClick={togglePasswordVisiblity2} />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </label>

                <button onClick={sendForm ? handleClick : console.log("¡El grupo 4 es el mejor!")} className="form-button" type="submit">Crear cuenta</button>
                <p className="login">¿Ya tienes cuenta?<Link class="input-login" to={"/login"}><span className="span-form"> Iniciar sesión</span></Link></p>
            </form>
        </div>
    )
}

export default FormCreateAccount
