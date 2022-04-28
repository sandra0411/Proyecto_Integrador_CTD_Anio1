import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale("es", es);

function Searcher({ cities, handleSelectCity, handleSelectDates, handleCityAndDates }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const calendar_icon = <i class="far fa-calendar-minus"></i> + "Check in - Check out"
  const [selectValue, setSelectValue] = useState("")

  return (
    <section class="searcher">
      <h1>Busca ofertas en cabañas, casas y mucho más</h1>
      <form action="#" method="POST" onSubmit={(event) => {
        event.preventDefault()
        if (dateRange[0] === null) {
          handleSelectCity(selectValue)
        } else if (selectValue === "" || selectValue === undefined || selectValue === null) {
          handleSelectDates(dateRange)
        } else {
          handleCityAndDates(dateRange, selectValue)
        }
      }}>
        <select class="form-control fa reserve" value={selectValue} onChange={(event) => {
          setSelectValue(event.target.value)
        }}>
          <option class="fa">&#xf279; ¿A dónde vamos?</option>
          {cities.map(function (city) {
            return (
              <>
                <option key={city.id} value={city.name} class="location_city fa" class="fa">&#xf3c5;
                  {" "} {city.name} - {city.countryName}
                </option>
              </>
            )
          })}
        </select>
        <div className="form-control fa reserve">
          <DatePicker
            wrapperClassName="datePicker"
            dateFormat="d 'de' MMM."
            placeholderText="&#xf272;  Check in - Check out"
            className="fa reserve_date"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            monthsShown={2}
            locale="es"
          />
        </div>
        <input class="search" type="submit" value="Buscar"/>
      </form>
    </section>
  )
}

export default Searcher