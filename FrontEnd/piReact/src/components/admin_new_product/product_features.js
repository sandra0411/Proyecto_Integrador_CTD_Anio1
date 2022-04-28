import React, {useState} from 'react';
import styles from '../../styles/admin_new_product/productNewFeaturesStyle.module.css';

export default function UploadFeatures() {

    const [itemName, setItemName] = useState("");
    const [itemIcon, setItemIcon] = useState("");

    const handleName = (event) => {
        setItemName(event.target.value)
    }

    const handleIcon = (event) => {
        setItemIcon(event.target.value)
    }

    return (
        <div className={styles.container_upload_features}>
            <h2>Agregar atributos</h2>
            <div className={styles.input_upload}>
                <div className={styles.inputs_features}>
                    <label className={styles.form_label}>
                        Nombre
                        <input type="text" name="name" id="name" className={styles.form_input} />
                    </label>
                    <label className={`${styles.form_label} ${styles.form_input_responsive}`}>
                        Ícono
                        <input type="text" name="name" id="name" className={styles.form_input} />
                    </label>
                    <button className={styles.button_add_feature}>+</button>
                </div>
            </div>
        </div>
    )
}