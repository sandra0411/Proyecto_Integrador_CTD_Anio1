import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = (validate) => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [sendForm, setSendForm] = useState(false)
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)

    };

    useEffect(() => {
        console.log(sendForm)
        if (Object.keys(errors).length === 0 && isSubmitting) {
            setSendForm(true)
        }
    },
        [errors, isSubmitting]
    );


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    const togglePasswordVisiblity2 = () => {
        setPasswordShown2(passwordShown2 ? false : true);
    };

    return { sendForm, isSubmitting, handleChange, values, handleSubmit, errors, togglePasswordVisiblity, passwordShown, togglePasswordVisiblity2, passwordShown2}
}

export default useForm;