import React, {useState, useEffect} from "react";
import axios from 'axios';

const CardCategory = ({ img, type, handleSelectCategory }) => {
   
    const url = `http://18.190.58.41:8080/products/sumproducts/${type}`
    const [productsTotal, setProductsTotal] = useState();

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProductsTotal(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url])

    return (<>
                <button className="card" onClick={() => {handleSelectCategory(type)}}>
                    <img src={img}></img>
                    <div className="cardText">
                        <h3>{type}</h3>
                        <p>{productsTotal} {type}</p>
                    </div>
                </button> 
            </>
    );
}

export default CardCategory;