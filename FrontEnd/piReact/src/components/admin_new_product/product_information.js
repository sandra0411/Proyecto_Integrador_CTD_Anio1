import React, { useState, useEffect } from 'react';
import styles from '../../styles/admin_new_product/productInformationStyle.module.css';
import style from '../../styles/admin_new_product/productNewFeaturesStyle.module.css';
import axios from 'axios';
import { RiDeleteBin2Line } from "react-icons/ri";

export default function ProductInformation({ handleTitle_description, handleReference, handleAddress, handleCategory, handleCity, handleDescription, handleLatitude, handleLongitude, handleName, handleFeatures }) {

    const url = `http://18.190.58.41:8080/categories/list`
    const url2 = `http://18.190.58.41:8080/cities/list`
    const url3 = `http://18.190.58.41:8080/features/list`
    const [categories, setCategories] = useState([])
    const [cities, setCities] = useState([])
    const [features, setFeatures] = useState([])
    const [itemName, setItemName] = useState("");
    const [itemIcon, setItemIcon] = useState("");
    const [list, setList] = useState([]);

    const handleNameFeature = (event) => {
        setItemName(event.target.value)
    }

    const handleIcon = (event) => {
        setItemIcon(event.target.value)
    }

    const handleDelete = () => {
        fetch(`http://18.190.58.41:8080/features/${itemName}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(res => console.log(res))

        setList(list.filter(feature => {
            if(feature !== itemName){
                return feature
            }
            else{
                return ""
            }
        }))
    }

    const handleClick = () => {
        fetch("http://18.190.58.41:8080/features", {
            method: "POST", headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify({
                name: itemName,
                icon: itemIcon

            })
        })

        setList(list.concat(
            <div className={`${styles.feature_detail} ${styles.checkbox}`}>
                <label className={styles.feature_label}>
                    <input onChange={handleFeatures} type="checkbox" name="features" /* id={feature.id} */ value={itemName} className={styles.feature_checkbox} />
                    {itemName}

                </label>
                <a onClick={handleDelete} >
                    <RiDeleteBin2Line id={styles.delete_icon} />
                </a>
            </div>
        ))
    }

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCategories(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(url2)
            .then(response => {
                setCities(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(url3)
            .then(response => {
                setFeatures(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url, url2, url3])

    return (
        <form className={styles.newproduct_form}>
            <div className={styles.inputs_newproduct}>
                <label className={styles.form_label}>
                    <div>Nombre de la propiedad <span className="asterisk_input"></span>  </div> 
                    <input onChange={handleName} placeholder="Ejemplo: Cabaña para parejas" type="text" name="name" id="name" className={styles.form_input} />
                </label>
                <div className={` ${styles.form_label} ${styles.style_select}`}>
                    <div>Categoría <span className="asterisk_input"></span> </div>
                    <select onChange={handleCategory} className={styles.form_input_select}>
                        <option value=""> Seleccionar categoría</option>
                        {categories.map(function (category) {
                            return (
                                <>
                                    <option key={category.id} value={category.id} >
                                        {category.title}
                                    </option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <label className={styles.form_label}>
                    <div>Dirección <span className="asterisk_input"></span> </div>  
                    <input onChange={handleAddress} placeholder="Ejemplo: San Martín, 1948" type="email" name="email" id="email" className={styles.form_input} />
                </label>
                <div className={styles.form_label}>
                    <div>Ciudad <span className="asterisk_input"></span>   </div>
                    <select onChange={handleCity} className={styles.form_input_select}>
                        <option value=""> Seleccionar ciudad</option>
                        {cities.map(function (city) {
                            return (
                                <>
                                    <option key={city.id} value={city.id} >
                                        {city.name}
                                    </option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <label className={styles.form_label}>
                    <div>Latitud <span className="asterisk_input"></span> </div>
                    <input onChange={handleLatitude} placeholder="Ejemplo: -31.535742" type="text" name="latitude" id="latitude" className={styles.form_input} />
                </label>
                <label className={styles.form_label}>
                    <div>Longitud <span className="asterisk_input"></span>   </div>
                    <input onChange={handleLongitude} placeholder="Ejemplo: -35.482897" type="text" name="lenght" id="lenght" className={styles.form_input} />
                </label>
                <label className={styles.form_label}>  
                <div>Titulo descripción <span className="asterisk_input"></span> </div>
                    <input onChange={handleTitle_description} placeholder="Ejemplo: Un paraíso en las montañas" type="text" name="title-description" id="title-description" className={styles.form_input} />
                </label>
                <label className={styles.form_label}>
                <div>Referencia ubicación <span className="asterisk_input"></span> </div>
                    <input onChange={handleReference} placeholder="Ejemplo: A 600 metros del aeropuerto" type="text" name="reference" id="reference" className={styles.form_input} />
                </label>
                <label className={`${styles.form_label} ${styles.form_product_description}`}>
                    <div>Descripción <span className="asterisk_input"></span> </div>  
                    <input onChange={handleDescription} placeholder="Escriba aquí..." type="textarea" name="description" id="description" className={`${styles.form_input} ${styles.form_input_description}`} />
                </label>
                <div className={styles.form_label}>
                    <div>Atributos <span>(al menos uno)</span> <span className="asterisk_input"></span>   </div>
                    <div className={styles.feature_container}>
                        {features.map(function (feature) {
                            return (
                                <div className={`${styles.feature_detail} ${styles.checkbox}`}>
                                    <label className={styles.feature_label}>
                                        <input onChange={handleFeatures} type="checkbox" name="features" id={feature.id} value={feature.name} className={styles.feature_checkbox} />
                                        {feature.name}
                                    </label>
                                </div>
                            )
                        })}
                        {list}
                    </div>
                </div>
            </div>
            <div className={style.container_upload_features}>
                <br />
                <h4>Puede agregar nuevos atributos aquí: </h4>
                <div className={style.input_upload}>
                    <div className={style.inputs_features}>
                        <label className={style.form_label}>
                            Nombre
                            <input onChange={handleNameFeature} placeholder="Ejemplo: Buffet" type="text" name="name" id="name" className={style.form_input} />
                        </label>
                        <label className={`${style.form_label} ${style.form_input_responsive}`}>
                            Ícono
                            <input onChange={handleIcon} placeholder="Ingrese código del ícono..." type="text" name="name" id="name" className={style.form_input} />
                        </label>
                        <input onClick={handleClick} className={style.button_add_feature} type="button" value="+" />
                    </div>
                </div>
            </div>
        </form>

    )

}