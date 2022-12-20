import React from 'react'
// Leaflet imports
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// Styles & Assets
import '.././Styles/MapStyle.css'
import icon from '../Assets/customMarker-icon.png'
// Shared datas
import locations from '../Shared/locations.json'


export default function MyMap() {
    const key = "IdfPASxPAKanPzgpPZLk";

    const position = [36.77414661855978, 3.0592983577363215]

    const zoomLvl = 3;

    const customIcon = new L.Icon({
        iconUrl: icon,
        iconSize: [35,45]
    });

    const markers = locations.map((location, index) =>
        <Marker
            id={index}
            icon={customIcon}
            position={[location.lat, location.lng]}
        >
            <Popup>
                <a href='http://gomycode.com/' target='_blank' rel="noreferrer">GoMyCode</a> {location.country}.<br/>{location.hackerspace}
            </Popup>
        </Marker>
    )

    return (
        <div className='container px-4 pb-5' >
            <h2 className='pb-5 text-center'>Visitez nos Hackerspaces</h2>
            <MapContainer
                center={position}
                zoom={zoomLvl}
            >
                <TileLayer 
                    attribution='https://api.maptiler.com/maps/basic-v2/tiles.json?key=IdfPASxPAKanPzgpPZLk'
                    url={`https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${key}`}
                />
                {markers}
            </MapContainer>
        </div>
    )
}