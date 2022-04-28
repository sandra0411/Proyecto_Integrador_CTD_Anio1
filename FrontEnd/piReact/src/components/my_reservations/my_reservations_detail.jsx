import React, { useEffect, useState, useContext } from 'react';
import Reservations from './my_reservations';
import Favorites from './my_favorites';
import Header from '../product_detail/product_header';
import '../../styles/index.css';
import ContextData from '../../context/userDataContext';

export default function MyReservations () {

    const [myReservations, setMyReservations] = useState([]);
    const { userName } = useContext(ContextData);
    const [userId, setUserId] = useState(0);

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
    }, [])

    useEffect(() => {
        fetch(`http://18.190.58.41:8080/reservations/list/user/${userId}`, {method : "GET"})
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(reservations => {
            console.log(reservations.map(function (reservation) {
                return (reservation.product)
            }))
            setMyReservations(reservations.map(function (reservation) {
                return (reservation.product)
            }))
        })
    }, [userId])

    return (<>
        <Header/>
        <Favorites/> {/* Podríamos mostrar también los favoritos acá. */}
        <Reservations myReservations={myReservations}/>
    </>)

}