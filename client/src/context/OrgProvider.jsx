import React, { createContext, useState } from 'react'

export const OrgContext = createContext()

function OrgProvider({children}) {
    const [orgData,setOrgData] = useState(null)
    const loadOrgData = (data) => {
        setOrgData(data)
    }
    const clearOrgData = () => {
        setOrgData(null)
    }
    
    console.log("orgData context:",orgData);
    
    return (
        <OrgContext.Provider value={{orgData,loadOrgData, clearOrgData}} >
            {children}
        </OrgContext.Provider>
    )
}

export default OrgProvider