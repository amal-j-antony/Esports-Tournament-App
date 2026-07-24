import { axiosConfig } from "./axiosConfig";
import { serverURL } from "./serverURL";

// register account
export const registerAccountAPI = async (data) => {
    return await axiosConfig("POST",`${serverURL}/register`,data)
}

//login
export const loginToAccountAPI = async (data) => {
    return await axiosConfig("POST",`${serverURL}/login`,data)
}
