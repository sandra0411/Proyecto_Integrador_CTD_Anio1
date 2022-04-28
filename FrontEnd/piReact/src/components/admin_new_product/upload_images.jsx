import React, { useState } from 'react';
import { BsFolderPlus } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import styles from '../../styles/admin_new_product/uploadImage.module.css';
import style from '../../styles/admin_new_product/productInformationStyle.module.css';

export default function UploadImages({ handleImages, handleClick }) {

    const [image, setImage] = useState("");
    const [imageName, setImageName] = useState("");
    const [list, setList] = useState([]);

    const handleImageUrl = (event) => {
        setImage(event.target.value)

    }

    const handleImageName = (event) => {
        setImageName(event.target.value)
    }

    const handleDelete = () => {
        fetch(`http://18.190.58.41:8080/images/${imageName}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(res => console.log(res))

        setList(list.filter(image => image !== imageName))
    }



    const handleImageClick = () => {

        fetch("http://18.190.58.41:8080/images/add", {
            method: "POST", headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify({
                title: imageName,
                url: image

            })
        })

        setList(list.concat(
            <div className={style.feature_container}>
                <div className={`${style.feature_detail} ${style.checkbox}`}>
                    <label className={style.feature_label}>
                        <input onChange={handleImages} type="checkbox" name="images" value={imageName} className={style.feature_checkbox}/>
                        {imageName}
                    </label>
                    <a onClick={handleDelete} >
                        <RiDeleteBin2Line id={style.delete_icon} />
                    </a>
                </div>
            </div>
        ))

    }


    return (
        <div id={styles.container_upload_images}>
            <h2>Cargar imágenes (al menos 5 imágenes) <span className="asterisk_input"></span>   </h2>
            <div id={styles.input_upload}>
                <div className={styles.container_new_image}>
                    <label className={styles.new_image_label}>
                        Titulo
                        <input type="text" name="imageurl" id="imageurl" onChange={handleImageName} className={styles.new_image_input} />
                    </label>
                    <label className={styles.new_image_label}>
                        URL
                        <input type="text" name="imageurl" id="imageurl" onChange={handleImageUrl} placeholder="Insertar https://" className={styles.new_image_input_url} />
                    </label>
                </div>
                <a onClick={handleImageClick} type="button" value="Crear" >
                    <BsFolderPlus id={styles.plus_icon} />
                </a>
            </div>
            <h3>Imágenes cargadas</h3>
            <br/>
            {list.length === 0  ? <p>Aún no se agregaron imágenes</p> : ""}
            {list}
            <div id={styles.button_upload}>
                <input onClick={handleClick} type="button" value="Crear" />
            </div>

        </div>)

}