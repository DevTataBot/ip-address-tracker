import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext'
import '../styles/Header.css'
import btnSearch from '../images/icon-arrow.svg'

const Header = () => {

    const [inputValue, setInputValue] = useState('')
    const { SearchUserIp } = useContext(AppContext || {})

    const handleAppIp = () => {
        SearchUserIp(inputValue)
    }
    return(
        <header className="Header">
            <h1 className="Header__title">IP Addres Tracker</h1>
            <div className="Header__search">
                <input className="Header__search-input" type="texto" 
                placeholder="Search for any IP addres or domain"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
                <button className="Header__search-btn"
                onClick={handleAppIp}>
                    <img src={btnSearch} alt="Boton busqueda"/>
                </button>
            </div>
        </header>
    )
}


export default Header