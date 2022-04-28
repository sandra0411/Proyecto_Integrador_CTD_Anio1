import React from 'react';
import styles from '../../styles/product_detail/productLocationStyle.module.css';
import MapView from './product_location_map';

const Location = ({ product }) => {

    return (
        <>
            <div className={styles.container_location}>
                <h2>¿Dónde vas a estar?</h2>
                <hr />
            </div>
            <div className={styles.map}>
                <p>{product.city.name}, {product.city.countryName}</p>
                <MapView product={product}/>
            </div>
        </>
    );
}

export default Location;
