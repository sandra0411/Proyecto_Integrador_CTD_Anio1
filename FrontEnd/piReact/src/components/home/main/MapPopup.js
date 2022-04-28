import React from 'react';
import '../../../styles/mapPopUp.css'
import MapView from '../../product_detail/product_location_map'

function MapPopUp (props) {

    return (props.trigger) ? (
        <div className="popUp_container">
            <div className="innerPopUp">
            <MapView product={props.product} className="popUp_map"/>
            <button className="popUp_button" onClick={() => props.setTrigger(false)}>X</button>
            {props.children}
            </div>
        </div>
    )
    :
    ""
}

export default MapPopUp;