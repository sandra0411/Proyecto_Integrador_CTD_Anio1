import React from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import { addDays } from 'date-fns';
import { useState } from 'react'
import useUser from '../../hooks/useUser';
import Swal from 'sweetalert2'; 
import es from 'date-fns/locale/es';
import '../../styles/product_detail/productDatesStyle.css';
import { useNavigate, useParams } from 'react-router';
registerLocale("es", es);


export default function ProductDates () {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const navigate = useNavigate();
    const { productId } = useParams()
    const { isLogged } = useUser()

    const handleClick = () => {
        if (isLogged){
            return navigate(`/product_detail/${productId}/reservation`)
        }
        else{
            Swal.fire({
                icon: 'warning',
                toast: true,
                text: 'Para realizar una reserva necesitas estar logueado',
                confirmButtonColor: '#0498bd',
                confirmButtonText: 'OK'
            }) 
            return navigate('/login')
        }
    }

    return (
        <div id="container_dates">
            <h2 id="h2_dates">Fechas disponibles</h2>
            <div id="container_dates_icons">
                <div className="calendar">
                    <DatePicker
                        wrapperClassName="datePicker"
                        dateFormat="d 'de' MMM."
                        className= "fa reserve_date"
                        monthsShown={2}
                        inline
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                        monthsShown={2}
                        locale= "es"
                        colorPrimary="#0fbcf9"
                        colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                        minDate={subDays(new Date(), 0)}
                        maxDate={addDays(new Date(), 137)}
                        filterDate={date => date.getDate() !== 28 && date.getDate() !== 16 && date.getDate() !== 17 && date.getDate() !== 22 && date.getDate() !== 3&& date.getDate() !== 6 && date.getDate() !== 7}
                        
                    />
                </div>
                <div id="container_dates_info">
                    <h4 id="h4_dates">Agregá tus fechas de viaje para obtener precios exactos</h4>
                    <input className="input_dates" type="button" value="Iniciar reserva" onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

