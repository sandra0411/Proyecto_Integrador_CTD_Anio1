import React, { useState } from 'react'

const ContextData = React.createContext({})

export function UserDataContextProvider ({children}) {
    const [favs, setFavs] = useState([])
    const [userName, setUsername] = useState(() => window.localStorage.getItem('userName'))

    return <ContextData.Provider value={{favs, userName, setFavs, setUsername}}>
        {children}
    </ContextData.Provider>
}

export default ContextData;