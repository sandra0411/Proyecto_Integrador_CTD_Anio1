import React from 'react';
import styles from '../../styles/product_detail/productDescriptionStyle.module.css';

const Description = ({ product }) => {

    return (
        <>
            <div className={styles.container_title_description}>
                <h2>{product.title_description}</h2>
            </div>
            <div className={styles.container_info}>
                <p>{product.description}</p>
            </div>
        </>
    )
}

export default Description;
