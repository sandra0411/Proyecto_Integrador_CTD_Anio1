import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/product_detail/productLocationHeader.module.css';
import { FaStar } from "react-icons/fa"; 

const ProductLocationHeader = ({ product }) => {

    const [rating, setRating] = useState(0); 
    const [scoreLevel, setScoreLevel] = useState("");

    useEffect(() => {
        fetch(`http://18.190.58.41:8080/products/list/punctuation/average/${product.id}`, { method: 'GET' })
        .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
          .then(score => {
            if (score == NaN) {
                setRating(0)
            } else {
                setRating(score)
            }
          })
    }, []);

    useEffect(() => {
        switch (Math.round(rating)) {
            case 1:
                setScoreLevel("Deficiente");
                break;
            case 2:
                setScoreLevel("Malo");
                break;
            case 3:
                setScoreLevel("Bueno");
                break;
            case 4:
                setScoreLevel("Muy bueno");
                break;
            case 5:
                setScoreLevel("Excelente");
                break;
            default:
                setScoreLevel("Sin puntuación");
        }
    }, [rating])

    return (

        <div id={styles.container_header}>
            <div>
                <h3 className={styles.h3_header}><FontAwesomeIcon icon={faMapMarkerAlt} /> {product.city.name}, {product.city.countryName}</h3>
                <h2 id={styles.h2_header}>{product.reference}</h2>
            </div>
            <div>
                <div>
                    <h3>{scoreLevel}</h3>
                    <div className="star-rating">{[...Array(5)].map((star, index) => {  
                                    index += 1;      
                                    return (         
                                        <button
                                        type="button"
                                        key={index}
                                        className={index <= (rating) ? "on" : "off"}
                                        onLoad={() => setRating(index)}
                                        >
                                        <FaStar className="star"/>
                                        </button>        
                                    );
                                })} 
                    </div> 
                </div>
                <div id={styles.score}>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductLocationHeader;