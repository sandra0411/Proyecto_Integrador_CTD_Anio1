import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from "react-router-dom"; // Importo los componentes de React Router.
import { FaStar } from "react-icons/fa"; //Importo estrellas
import MapPopUp from './MapPopup';
import { useLocation } from 'react-router-dom';
import ContextData from '../../../context/userDataContext';

function CardRecom({ id, img, category, title, location, description, features, product }) {
    const [popUp, setPopUp] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [scoreLevel, setScoreLevel] = useState("");
    const [smallDescription, setSmallDescription] = useState(true);
    const pathLocation = useLocation();
    const [userId, setUserId] = useState();
    const { userName } = useContext(ContextData);
    const [path, setPath] = useState(false)

    let bodyPost = {
        score: rating,
        product: {
            id: id
        },
        user: {
            id: userId
        }
    }

    useEffect(() => { /* Fetch GET de usuario por email */

        if (pathLocation.pathname === "/my_reservations") {
            fetch(`http://18.190.58.41:8080/users/mail/${userName.mail}`, { method: "GET" })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(user => {
                    setUserId(user.id)
                })
        }
    }, [path])

    const handlePost = () => {
        fetch(`http://18.190.58.41:8080/punctuations`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(bodyPost)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
    }

    const scoreDynamic = (<div onClick={handlePost} className="star-rating">{[...Array(5)].map((star, index) => {
        index += 1;
        return (
            <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onLoad={() => setRating(index)}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}

            >
                <FaStar className="star" />
            </button>
        );
    })}
    </div>)

    const scoreStatic = (<div className="star-rating">{[...Array(5)].map((star, index) => {
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
    </div>)

    useEffect(() => {
        fetch(`http://18.190.58.41:8080/products/list/punctuation/average/${id}`, { method: 'GET' })
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

    }, [id]);

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

    const toggleDescription = () => {
        setSmallDescription(!smallDescription);
    }

    return (
        <>
            <div className="cardRecom">
                <div className="card-bg">
                    {pathLocation.pathname === "/my_reservations" ?
                        <FontAwesomeIcon icon={faHeart} />
                        :
                        <FontAwesomeIcon icon={faHeart} style={{visibility: "hidden"}}/>
                    }
                    <img src={img}></img>
                </div>
                <div className="card-texto">
                    <div className="ranking">
                        <div className="tituloCardRecom">

                            <div>
                                <h5>{category.toUpperCase()} </h5>

                            </div>

                            <h3>{title}</h3>
                        </div>
                        <div className="rankingContainer">
                            {pathLocation.pathname === ("/my_reservations") ? scoreDynamic : scoreStatic}
                            <a className="btnRanking">{rating}</a>
                            <h4 className="scoreLevel">{scoreLevel}</h4>
                        </div>
                    </div>
                    <h4><i className="fas fa-map-marker-alt"></i> {location} <span className="spanMain" onClick={() => setPopUp(true)}>MOSTRAR EN EL MAPA</span></h4>
                    <MapPopUp trigger={popUp} product={product} setTrigger={setPopUp}>

                    </MapPopUp>
                    <div className="icons">
                        {features.slice(0, 3).map(function (feature, index) {
                            return (
                                <div >
                                    <i key={index} className={feature.icon}></i>
                                </div>
                            )
                        })}
                    </div>
                    {smallDescription ?
                        <>
                            <p class="descripText">{description} </p> <span onClick={toggleDescription} className="spanMain">más...</span>
                            <Link className="btnVerMas" to={`/product_detail/${id}`}>Ver más</Link>
                        </>
                        :
                        <div>
                            <p className="descripTextFull">{description} </p> <span onClick={toggleDescription} className="spanMain">...menos</span>
                        </div>

                    }
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default CardRecom;