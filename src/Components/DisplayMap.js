import React, { useContext } from 'react'
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import L from 'leaflet'
import '../styles/DisplayMap.css'
import iconPosition from '../images/position.png'
import {AppContext} from '../context/AppContext'

const markerPosition = new L.Icon({
    iconUrl: (iconPosition),
    iconSize: [40, 40],
    iconAnchor: [17, 45],
    popupAnchor: [0 -46]
})

const MyView = ({ center }) => {
    const map = useMap()
    map.setView(center)
    return null
}

const DisplayMap = () => {    
    const { trackerInfo } = useContext(AppContext)
    return(
        <MapContainer className="Container-map" zoomControl={false} center={trackerInfo.location} zoom={13} scrollWheelZoom={true}>
            <MyView center={trackerInfo.location} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={trackerInfo.location} icon={markerPosition}>
                <Popup>
                    <p>You´re here</p>  
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default DisplayMap
