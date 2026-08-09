
import { axiosConfig } from "./axiosConfig";


// register account
export const registerAccountAPI = async (data) => {
    return await axiosConfig("POST",`/register`,data)
}

//login
export const loginToAccountAPI = async (data) => {
    return await axiosConfig("POST",`/login`,data)
}

//identity
export const getAuthenticationStatusAPI = async () => {
    return await axiosConfig("GET",'/identity',{})
}

//get new access token
export const getNewAccessTokenAPI = async () => {
    return await axiosConfig("GET",'/refresh',{})
}

//logout
export const logoutAccoutAPI = async () => {
    return await axiosConfig("GET",'/logout',{})
}
