import React, { useContext } from 'react'
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import L from 'leaflet'
import '../styles/DisplayMap.css'
import iconPosition from '../images/position.png'
import {AppContext} from '../context/AppContext'

const markerPosition = new L.Icon({
    iconUrl: (iconPosition),
    iconSize: [55, 55],
    iconAnchor: [20, 20],
    popupAnchor: [10,10]
})

const MyView = ({ center}) => {
    const map = useMap()
    map.setView(center,13)
    return null
}

const DisplayMap = () => {    
    const { trackerInfo } = useContext(AppContext)
    return(
        <MapContainer  className="Container-map" zoomControl={true} center={trackerInfo.location} zoom={13} scrollWheelZoom={true}>
            <MyView center={trackerInfo.location} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={trackerInfo.location} icon={markerPosition}>
                <Popup>
                    You´re here 
                </Popup>
            </Marker>
        </MapContainer>
   
    )
}

export default DisplayMap
