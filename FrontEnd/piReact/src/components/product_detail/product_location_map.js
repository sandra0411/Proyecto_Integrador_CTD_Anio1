import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import '../../styles/product_detail/productLocationMapStyle.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = ({ product }) => {


    const position = [parseFloat(`${product.latitude}`), parseFloat(`${product.longitude}`)]
    return (
        <div>
            <Map center={{ lat: `${product.latitude}`, lng: `${product.longitude}` }} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    <Popup>
                        <p className="popUp_name">{product.name}</p>
                    </Popup>
                </Marker>
            </Map>

        </div>
    )
}

export default MapView;