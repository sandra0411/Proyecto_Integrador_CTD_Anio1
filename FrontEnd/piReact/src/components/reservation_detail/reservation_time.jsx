import React from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillPatchCheckFill, BsCalendarCheckFill } from "react-icons/bs";
import style from "../../styles/reservation_detail/reservationTime.module.css"

export default function Time ({handleTime}) {

    return (<>
        <h3 id={style.time_container_h3}>Tu horario de llegada</h3>
        <div id={style.time_container}>
            <div>
                <BsFillPatchCheckFill className={style.icon}/>
                <h4>Tu inmueble va a estar listo para el check-in entre las 10:00 AM y las 11:00 PM</h4>
            </div>
            <p>Indicá tu horario estimado de llegada <span class="asterisk_input"></span></p>
            <div className={style.select}>
                <select required onChange={handleTime}> 
                    <option defaultValue selected value=""> Seleccione su horario de llegada </option>
                    <option value="1">01:00 AM</option>
                    <option value="2">02:00 AM</option>
                    <option value="3">03:00 AM</option>
                    <option value="4">04:00 AM</option>
                    <option value="5">05:00 AM</option>
                    <option value="6">06:00 AM</option>
                    <option value="7">07:00 AM</option>
                    <option value="8">08:00 AM</option>
                    <option value="9">09:00 AM</option>
                    <option value="10">10:00 AM</option>
                    <option value="11">11:00 AM</option>
                    <option value="12">12:00 PM</option>
                    <option value="13">01:00 PM</option>
                    <option value="14">02:00 PM</option>
                    <option value="15">03:00 PM</option>
                    <option value="16">04:00 PM</option>
                    <option value="17">05:00 PM</option>
                    <option value="18">06:00 PM</option>
                    <option value="19">07:00 PM</option>
                    <option value="20">08:00 PM</option>
                    <option value="21">09:00 PM</option>
                    <option value="22">10:00 PM</option>
                    <option value="23">11:00 PM</option>
                    <option value="0">12:00 AM</option>
                </select>
                <RiArrowDownSLine className={style.icon_arrow}/>
            </div>
        </div>
    </>)

}