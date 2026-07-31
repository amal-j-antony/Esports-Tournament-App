import { logoutAccoutAPI } from '@/services/accountMethods'
import { registerLogoutHandler } from '@/services/axiosInstance'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)

    const updateToken = (token) => {
        setAccessToken(token)
    }

    const login = (userData) => {
        setUser(userData)
    }
    const logout = async () => {
        if (user === null) {
            return console.log("No authenticated user found");
            
        } else {
            setUser(null)
            setAccessToken(null)
            try {
                const result = await logoutAccoutAPI()
                console.log(result);
                toast.success("Log out successful")
                navigate("/login")
            } catch (error) {
                console.log("Logout Failed");
            }
        }

    }
    console.log("UserData Auth Provider", user);
    console.log("UserToken Auth Provider", accessToken);

    useEffect(() => {
        registerLogoutHandler(logout)
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout, accessToken, updateToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)