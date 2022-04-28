import React from "react";
import { MdArrowBackIos } from 'react-icons/md'; 
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/product_detail/productHeader.module.css';
import {useLocation} from 'react-router-dom';

const ProductHeader = ({product}) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === ("/administration")) {
        return (
            <div id={styles.container_header}>
                <div>
                    <h2 id={styles.h2_header}>Administración</h2>
                </div>
                <button className={styles.button_navigate} onClick={() => navigate(-1)}><MdArrowBackIos id={styles.arrow} /></button> 
            </div>
        )
    } else if (location.pathname === ("/my_reservations")) {
        return (
            <div id={styles.container_header}>
                <div>
                    <h2 id={styles.h2_header}>Mis reservas</h2>
                </div>
                <button className={styles.button_navigate} onClick={() => navigate(-1)}><MdArrowBackIos id={styles.arrow} /></button> 
            </div>
        )
    } else {
        return (
            <div id={styles.container_header}>
                <div>
                    <h3 className={styles.h3_header_category}>{(product.category.title).toUpperCase()}</h3>
                    <h2 id={styles.h2_header}>{product.name}</h2>
                </div>
                <button className={styles.button_navigate} onClick={() => navigate(-1)}><MdArrowBackIos id={styles.arrow} /></button> 
            </div>
        )
    }  
}

export default ProductHeader;