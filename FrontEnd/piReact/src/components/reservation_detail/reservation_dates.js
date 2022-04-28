import React, { useEffect } from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import { addDays } from 'date-fns';
import { useState } from 'react'

import es from 'date-fns/locale/es';
import styles from '../../styles/reservation_detail/reservationDates.module.css';


registerLocale("es", es);

export default function ReservationDates ({handleDates}) {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    

    useEffect(() => {
        
        if (startDate && endDate) {
            handleDates(dateRange)
        }
        
    }, [dateRange])

    return (
        <div className={styles.reservation_dates_container}>
            <h2 className={styles.reservation_dates_title}>Seleccioná tu fecha de reserva</h2>
            <div className={styles.container_dates}>
                <div className={styles.datePicker}>
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
                            setDateRange(update)
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
            </div>
        </div>
    )

}

