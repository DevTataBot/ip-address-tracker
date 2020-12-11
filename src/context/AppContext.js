import React, { createContext, useState, useEffect } from 'react' 

const initialState ={
    ip_address: '...Loading',
    city: '...Loading',
    timezone: '...Loading',
    isp: '...Loading',
    location: [0, 0]
}


export const  AppContext = createContext()

export const  AppContextProvider  = (props) => {

    const [trackerInfo, setTrackerInfo] = useState(initialState)
    
    const getUserIp = async () => {

        const response = await fetch('https://geo.ipify.org/api/v1?apiKey=at_h7OWP0HYzS8cGNF0ZjGT9ivOr55UZ')

        if(response.ok){
            const responseJson = await response.json()
            const { ip, location, isp } = responseJson

            setTrackerInfo({
                ip_address: ip,
                city: location.city,
                timezone: location.timezone,
                isp: isp,
                location: [location.lat, location.lng]
            })
        }else{
            throw new Error("Error")
        }
    }

    const SearchUserIp = async (IP) => {
        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_h7OWP0HYzS8cGNF0ZjGT9ivOr55UZ&ipAddress=${IP}`)
        if(response.ok){
            const responseJson = await response.json()
            const { ip, location, isp } = responseJson

            setTrackerInfo({
                ip_address: ip,
                city: location.city,
                timezone: location.timezone,
                isp: isp,
                location: [location.lat, location.lng]
            })
        }else{
            throw new Error("Error")
        }

    }

    useEffect(() => {
        getUserIp()
    }, [])

    return(
        <AppContext.Provider value={{
            SearchUserIp,
            trackerInfo
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

