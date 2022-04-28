import React, { useEffect, useState, useContext } from 'react';
import NewPolicies from './product_policies';
import NewImages from './upload_images';
import Header from '../product_detail/product_header';
import ProductInformation from './product_information';
import styles from '../../styles/admin_new_product/newProductStyles.module.css'
import Swal from 'sweetalert2'; // Importo SweetAlert
import Context from '../../context/userContext';

export default function NewProduct() {

    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [policyRules, setPolicyRules] = useState([]);
    const [policyHealth, setPolicyHealth] = useState([]);
    const [policyCancellation, setPolicyCancellation] = useState([]);
    const [images, setImages] = useState([]);
    const [title_description, setTitle_description] = useState("");
    const [reference, setReference] = useState("");

    const { jwt } = useContext(Context);
    let bearer = jwt

    useEffect(() => {
        setData({
            name: name,
            description: description,
            title_description: title_description, 
            latitude: latitude,
            longitude: longitude,
            reference: reference, 
            address: address,
            images: images.map(function (image) {
                    return ({
                        id: image
                    })
                }),
            category: {id: category},
            city: {id: city},
            features: features.map(function (feature) {
                return({
                    id: feature
                })
            }),
            policyHealthAndSecurity: policyHealth.map(function (policy) {
                return ({
                    id: policy
                })
            }),
            policyCancellation: policyCancellation.map(function (policy) {
                return ({
                    id: policy
                })
            }),
            policyHouseRules: policyRules.map(function (policy) {
                return ({
                    id: policy
                })
            })
        })
    }, [ name, category, address, city, latitude, longitude, description, features, images, policyHealth, policyCancellation, policyRules])

    const handleClick = () => {

        if(data.title_description === "" || data.reference === "" || data.name === "" || data.category === "" || data.address === "" || data.city === "" || data.latitude === "" || data.longitude === "" || data.description === "" || features.length === 0 || images.length < 5) {
            Swal.fire({
                icon: 'warning',
                toast: true,
                position: 'top',
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
                title: `<h5 style='color:#FFFFFF; font-weight: lighter'>Por favor, complete todos los campos obligatorios.</h5>`,
                background: '#0498bd', 
                iconColor: '#FFFFFF'
            })
        } else {

            fetch('http://18.190.58.41:8080/products', {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)})
            .then(response => {
                if (response.status == 200 ) {
                    Swal.fire({
                        imageUrl: 'https://media.giphy.com/media/VIPR6xsM6MxtPDS1XD/giphy.gif',
                        imageHeight: 300,
                        title: `<h5 style='font-size: 20px'>Su propiedad se ha creado con éxito.</h5>`,
                        confirmButtonColor: '#0498bd',
                        backdrop: `rgba(0,0,123,0.4)`
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        toast: true,
                        showConfirmButton: true,
                        title: `<h4 style='color:#000000; font-weight: lighter'>Ocurrió un error. Intente más tarde.</h4>`,
                        background: '#FFFFFF', 
                        iconColor: '#0498bd',
                        confirmButtonColor: '#0498bd'
                    })
                }
              })          
        }   
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleCity = (event) => {
        setCity(event.target.value);
    }

    const handleLatitude = (event) => {
        setLatitude(event.target.value);
    }

    const handleLongitude = (event) => {
        setLongitude(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleFeatures = (event) => {
        fetch(`http://18.190.58.41:8080/features/name/${event.target.value}`, {method: "GET"})
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(feature => {
            if (event.target.checked) {
                setFeatures(features.concat(feature.id))     
            } else {
                setFeatures(features.filter(featureId => featureId !== feature.id))
            }
        })
    }

    const handleImageId = (event) => {
        fetch(`http://18.190.58.41:8080/images/${event.target.value}`, { method: "GET" })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(image => {
                if (event.target.checked) {
                    setImages(images.concat(image.id))
                } else {
                    setImages(images.filter(imageId => imageId !== image.id))
                }

            })
    }

    const handlePoliciesRules = (event) => { 

        fetch(`http://18.190.58.41:8080/policyhouserules/description/${event.target.value}`, {method: "GET", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,}})
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(policy => {
            if (event.target.checked) {
                setPolicyRules(policyRules.concat(policy.id))     
            } else {
                setPolicyRules(policyRules.filter(rule => rule !== policy.id))
            }
        })   
    }
    
    const handlePoliciesHealth = (event) => { 

        fetch(`http://18.190.58.41:8080/policyhealthandsecurity/description/${event.target.value}`, {method: "GET", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,}})
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(policy => {
            if (event.target.checked) {
                setPolicyHealth(policyHealth.concat(policy.id))     
            } else {
                setPolicyHealth(policyHealth.filter(rule => rule !== policy.id))
            } 
        })
    }

    const handlePoliciesCancellation = (event) => { 

        fetch(`http://18.190.58.41:8080/cancellationpolicy/description/${event.target.value}`, {method: "GET", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,}})
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(policy => {
            if (event.target.checked) {
                setPolicyCancellation(policyCancellation.concat(policy.id))     
            } else {
                setPolicyCancellation(policyCancellation.filter(rule => rule !== policy.id))
            } 
        })
    }

    const handleReference = (event) => {
        setReference(event.target.value)
    }

    const handleTitle_description = (event) => {
        setTitle_description(event.target.value)
    }

    return (
        <div>
            <Header />
            <div>
                <h1 className={styles.title_adminpage}>Crear propiedad</h1>
                <div className={styles.new_product_page}>
                    <ProductInformation handleTitle_description={handleTitle_description} handleReference={handleReference} handleAddress={handleAddress} handleCategory={handleCategory} handleCity={handleCity} handleDescription={handleDescription} handleLatitude={handleLatitude} handleLongitude={handleLongitude} handleName={handleName} handleFeatures={handleFeatures}/>
                    <NewPolicies handlePoliciesRules={handlePoliciesRules} handlePoliciesHealth={handlePoliciesHealth} handlePoliciesCancellation={handlePoliciesCancellation}/>
                    <NewImages handleImages={handleImageId} handleClick={handleClick}/>
                </div>

            </div>

        </div>
    )

}