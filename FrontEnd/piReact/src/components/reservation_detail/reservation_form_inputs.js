import React, {useContext} from 'react';
import styles from '../../styles/reservation_detail/reservationFormInputs.module.css';
import ContextData from '../../context/userDataContext';

export default function FormInputs({handleCity, product}) {
    const { userName } = useContext(ContextData);

    return (
        <form name="reservation_form" className={styles.reservation_form}>
            
            <div className={styles.inputs_reservation}>
                <label className={styles.form_label}>
                    Nombre 
                    <input value={userName.name} type="text" name="name" id="name" className={styles.form_input} disabled/>
                </label>
                <label className={styles.form_label}>
                    Apellido 
                    <input value={userName.lastname} type="text" name="lastName" id="lastName" className={styles.form_input} disabled/>
                </label>
                <label className={styles.form_label}>
                    Correo electrónico
                    <input value={userName.mail} type="email" name="email" id="email" className={styles.form_input} disabled/>
                </label>
                <label className={styles.form_label}>
                    Ciudad
                    <input onChange={handleCity} type="text" name="city" id="city" value={[product.city.name]} className={styles.form_input} disabled/>
                </label>
            </div>
        </form>
    )
}