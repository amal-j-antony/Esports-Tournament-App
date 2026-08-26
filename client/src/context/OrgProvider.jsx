import  { createContext, useState } from 'react'
import { useAuth } from './AuthProvider'

export const OrgContext = createContext()

function OrgProvider({children}) {
    const {user} = useAuth()
    const [orgData,setOrgData] = useState(null)
    const [userOrgData,setUserOrgData] = useState(null)

    const loadOrgData = (data,userID) => {
        setOrgData(data)
        setUserOrgData(data?.oMembers.find((item)=>item?.userID._id == userID))
    }
    const clearOrgData = () => {
        setOrgData(null)
        setUserOrgData(null)
    }
    
    console.log("orgData context:",orgData);
    console.log('userOrgData',userOrgData);
    console.log(orgData?.oMembers[0].userID._id);
    
    
    return (
        <OrgContext.Provider value={{orgData,loadOrgData, clearOrgData, userOrgData}} >
            {children}
        </OrgContext.Provider>
    )
}

export default OrgProvider