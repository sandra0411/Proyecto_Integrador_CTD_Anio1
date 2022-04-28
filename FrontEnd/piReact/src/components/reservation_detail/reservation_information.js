import React, { useState, useContext, useEffect  } from 'react';
import Swal from 'sweetalert2'; 
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/reservation_detail/reservationInformation.module.css';
import Context from '../../context/userContext';
import { FaStar } from "react-icons/fa"; 
import ContextData from '../../context/userDataContext';


export default function Reservation({ product, startDate, finalDate, time, city }) {

    const navigation = useNavigate()
    const [vaccine, setVaccine] = useState(false);
    const [extraText, setExtraText] = useState("");
    const { jwt } = useContext(Context);
    const [rating, setRating] = useState(0); 
    const [scoreLevel, setScoreLevel] = useState("");
    const { userName } = useContext(ContextData);
    const [userId, setUserId] = useState(0);


    let data = {};
    let settings = {};
    let URL = 'http://18.190.58.41:8080/reservation';
    let bearer = jwt

    useEffect(() => {
        fetch(`http://18.190.58.41:8080/users/mail/${userName.mail}`, {method: "GET"})
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(user => {
            setUserId(user.id)
        })
      }, [userId])

    useEffect(() => {
        fetch(`http://18.190.58.41:8080/products/list/punctuation/average/${product.id}`, { method: 'GET' })
        .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
          .then(score => {
            console.log("Hola, si me leés es porque anda.")
            console.log(score)
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

    const handleClick = () => {

        if (startDate !== "" && finalDate !== "" && time !== "" && city !== "") {

            data = {
                startTime: time,
                startDate: startDate,
                finalDate: finalDate,
                vaccinated: vaccine,
                sellerData: extraText,
                product: {
                    id: product.id
                },
                user: {
                    id: userId 
                }
            }

            console.log(data);
            console.log(city)
            
 
            settings = {
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${bearer}`,
                }
                ,
                body: JSON.stringify(data)
            }

            fetch(URL, settings)
            .then(response => response.text())
            .then( () => {(
                Swal.fire({
                imageUrl: 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/checkIconB.svg',
                imageHeight: 150,
                title: `<h5 style='color:#0498bd'>¡Muchas gracias!</h5>`,
                text: 'Su reserva se ha realizado con éxito',
                confirmButtonColor: '#0498bd',
                backdrop: `rgba(0,0,123,0.4)`
                }).then(() => {
                    navigation("/home")
                })
            )})
            .catch( () => {
                Swal.fire({
                    icon: 'error',
                    toast: true,
                    position: 'center',
                    showConfirmButton: true,
                    text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
                    iconColor: '#0498bd',
                    confirmButtonColor: '#0498bd' ,
                    confirmButtonText: 'Aceptar'
                })
            })

        } else {
            Swal.fire({
                icon: 'warning',
                toast: true,
                position: 'top',
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
                title: `<h5 style='color:#FFFFFF; font-weight: lighter'>Por favor, complete todos los campos obligatorios.</h5>`,
                background: '#0498bd', 
                iconColor: '#FFFFFF',
            })
        }
        
    }

    const handleChange = (event) => {
        setExtraText(event.target.value)
    }

    const handleCheckbox = (event) => {
        console.log("Checkbox")
        console.log(event.target.checked)
        setVaccine(event.target.checked)
    }

    return (
        <div className={styles.reservation_container}>
            <div>
                <h2 className={styles.reservation_h2}>Detalle de la reserva</h2>
                <div className={styles.reservation_image}>
                    <img src={product.images[0].url} alt="" />
                </div>
            </div>
            <div className={styles.detail_reservation_tablet}>
                <div className={styles.reservation_detail_name}>
                    <h3>{(product.category.title).toUpperCase()}</h3>
                    <h2>{product.name}</h2>
                    <div className={styles.reservation_stars}>
                            <div className="star-rating">{[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={index <= (rating) ? "on" : "off"}
                                        onLoad={() => setRating(index)}                                    
                                        >
                                        
                                        <FaStar className="star" />
                                        
                                    </button>
                                );
                            })}
                                
                            </div>
                    </div>
                </div>
                <div className={styles.reservation_location}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p> {product.address}</p>
                </div>
                <hr className={styles.reservation_line} />
                <div className={styles.reservation_check}>
                    <p>Check in</p>
                    <p>{startDate ? `${startDate.getDate()}/${startDate.getMonth()+1}/${startDate.getYear()+1900}` : ""}</p>
                </div>
                <hr className={styles.reservation_line} />
                <div className={styles.reservation_check}>
                    <p>Check out</p>
                    <p>{finalDate ? `${finalDate.getDate()}/${finalDate.getMonth()+1}/${finalDate.getYear()+1900}` : ""}</p>
                </div>
                <hr className={styles.reservation_line} />

                <label className={styles.extraData}> Datos para el vendedor {}
                    <textarea onChange={handleChange}/>
                </label>

                <hr className={styles.reservation_line} />

                <label className={styles.vaccine}> Vacuna COVID-19 {}
                    <input onChange={handleCheckbox} type="checkbox"/>
                </label>
                
                <button onClick={handleClick} className={styles.reservation_button}>Confirmar reserva</button>
            </div>
        </div>
    )
}