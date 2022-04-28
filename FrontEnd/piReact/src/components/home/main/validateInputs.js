export default function validateInputs(values) {
    let errors = {};

    if(!values.name.trim()){
        errors.name = "El campo es obligatorio"
    }

    if(!values.lastName.trim()){
        errors.lastName = "El campo es obligatorio"
    }

    if(!values.email) {
        errors.email = "El campo es obligatorio"
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)){
        errors.email = "El email no cuenta con un formato válido"
    }

    if(!values.confirmEmail) {
        errors.confirmEmail = "El campo es obligatorio"
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.confirmEmail)){
        errors.confirmEmail = "El email no cuenta con un formato válido"
    } else if (values.confirmEmail !== values.email){
        errors.confirmEmail = "El email no coincide"
    }

    if(!values.password) {
        errors.password = "El campo es obligatorio"
    } else if (values.password.length < 7) {
        errors.password = "La contraseña debe tener más de 6 caracteres"
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = "El campo es obligatorio"
    } else if (values.confirmPassword.length < 7) {
        errors.confirmPassword = "La contraseña debe tener más de 6 caracteres"
    } else if (values.confirmPassword !== values.password){
        errors.confirmPassword = "La contraseña no coincide"
    }

    return errors;
}