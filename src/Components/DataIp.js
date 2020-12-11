import React, { useContext } from 'react'
import  {AppContext}  from '../context/AppContext'
import '../styles/DataIp.css'

const DataIp = () => {
    const { trackerInfo } = useContext(AppContext || {})
    const {ip_address, city, timezone, isp } = trackerInfo

    return(
        <section className="Container">
            <div className="Container__Data">
                <div className="Container__Data-ip border-right">
                    <h3>IP ADDRESS</h3>
                    <p>{ip_address}</p>
                </div>
                <div className="Container__Data-location border-right">
                    <h3>LOCATION</h3>
                    <p>{city}</p>
                </div>
                <div className="Container__Data-timezone border-right">
                    <h3>TIME ZONE</h3>
                    <p>{timezone}</p>
                </div>
                <div className="Container__Data-isp">
                    <h3>ISP</h3>
                    <p>{isp}</p>
                </div>
            </div>
        </section>
    )
}


export default DataIp