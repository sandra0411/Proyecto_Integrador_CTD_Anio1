import React from 'react';
import styles from '../../styles/product_detail/productFeaturesStyle.module.css';


export default function Features({product}) {
    const features = product.features;


    return (
        <div id={styles.container_features}>
            <h2 id={styles.title_h2}>¿Qué ofrece este lugar?</h2>
            <hr className={styles.hr_detail} />
            <div id={styles.container_items}>
            {features.map(function (feature, index) {
                    return (
                        <div >
                            <i key={index} className={` ${feature.icon} ${styles.icon}`}></i>
                            <p key={index + 1} className={styles.paragraph}>{feature.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}