import { useCallback, useContext, useState} from "react";
import { useNavigate } from "react-router";
import Context from "../context/userContext"

export default function useUser() {
    const { jwt, setJWT } = useContext(Context);
    const [error, setError] = useState(false)
    const [userData, setUserData] = useState("")
    const navigate = useNavigate();

    // useCallback para evitar crear la funcion cada vez que actualizamos
    const login = useCallback(({ username, password }) => {
        fetch('http://18.190.58.41:8080/authenticate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Credenciales invalidas")
                }
            })
            .then(data => {
                setJWT(data.jwtToken)
            })
            .catch(err => {
                setError(true)
                console.error(err)
            })
    }, [setJWT])

    // para limpiar el jwt al hacer logout
    const logout = useCallback(() => {
        window.localStorage.removeItem('userName')
        setJWT(null)
        navigate("/")
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        hasLoginError: error,
        login,
        logout
    }
}