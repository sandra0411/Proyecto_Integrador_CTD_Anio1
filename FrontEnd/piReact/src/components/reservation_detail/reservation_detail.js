import React, { useState, useEffect, useContext} from 'react'
import ContextData from '../../context/userDataContext';
import ProductHeader from "../product_detail/product_header";
import Policies from "../product_detail/product_policies";
import ReservationInformation from './reservation_information'
import FormInputs from './reservation_form_inputs';
import ReservationDates from './reservation_dates';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Time from './reservation_time';
import Loader from '../loader/loading'
import styles from '../../styles/reservation_detail/reservationGrid.module.css';
import style from '../../styles/reservation_detail/reservationFormInputs.module.css';

export default function Reservation() {
    const { productId } = useParams()
    const url = `http://18.190.58.41:8080/products/${productId}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    const [startDate, setStartDate] = useState("")
    const [finalDate, setFinalDate] = useState("")
    const [time, setTime] = useState("")
    const [city, setCity] = useState("")
    const { userName } = useContext(ContextData);

    let content = null;

    const handleDates = (dateRange) => {
        console.log("dispara el evento", typeof(dateRange))
        console.log(dateRange[0])
        setStartDate(dateRange[0])
        setFinalDate(dateRange[1])
    }

    const handleTime = (event) => {
        setTime(event.target.value)
    }

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if (product.error) {
        content = <p>Error</p>
    }

    if (product.loading) {
        content =         
        <> 
        <Loader/>
        </>
    }

    if (product.data) {
        content =
            <>
                <ProductHeader product={product.data} />
                <h2 className={style.reservation_form_title}>Completá tus datos</h2>
                <div className={styles.reservation_container_grid}>
                    <div className={styles.forminputs}>
                        <FormInputs product={product.data} userName={userName} handleCity={handleCity}/>
                    </div>
                    <div className={styles.reservationDates}>
                        <ReservationDates handleDates={(dateRange) => handleDates(dateRange)}/>
                    </div>
                    <div className={styles.reservationTime}>
                        <Time handleTime={handleTime}/>
                    </div>
                    <div className={styles.reservationinformation}>
                        <ReservationInformation city={product.data.city.name} time={time} startDate={startDate} finalDate={finalDate} product={product.data} className={styles.reservationinformation} />
                    </div>

                </div>

                <Policies product={product.data}/>
            </>

    }

    return (
        <div>
            {content}
        </div>
    )
}