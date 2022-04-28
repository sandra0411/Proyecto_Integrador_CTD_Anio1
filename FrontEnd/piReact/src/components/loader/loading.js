import React from 'react';
import styles from '../../styles/loadingStyles.module.css'

export default function Loader () {

    return (
        <div className={styles.loader_container}>
        <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div></div>
        <p className={styles.loading}>Digital Booking</p>
        </div>
    )
}