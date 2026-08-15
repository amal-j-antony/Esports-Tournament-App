import axios from "axios";
import { serverURL } from "./serverURL";
import { useAuth } from "@/context/AuthProvider";
import { getNewAccessTokenAPI } from "./accountMethods";

export const axiosInstance = axios.create({
    baseURL: serverURL,
    timeout: 5000,
    withCredentials: true
})

let logoutHandler = null

export const registerLogoutHandler = (fn) => {
    logoutHandler = fn
}


axiosInstance.interceptors.response.use(
    (response) => {
        console.log("response received", response);
        return response
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response) {
            const status = error.response.status;
            console.log("retry", originalRequest.retry);
            

            if (status === 401 && !originalRequest.retry &&originalRequest.url!="/refresh" ) {
                console.log("401 Unauthorized, retrying once", error)
                originalRequest.retry = true
                try {
                    const result = await getNewAccessTokenAPI()
                    originalRequest.headers.Authorization = `Bearer ${result.data.newToken}`
                    return axiosInstance(originalRequest)
                } catch (error) {
                    logoutHandler?.()
                    return promise.reject(error)
                }
                // const result = await getNewAccessTokenAPI()
                // if(result.status === 401){
                //     logoutHandler?.()
                // }else if(result.status === 200){
                //     originalRequest.headers.Authorization = `Bearer ${result.data.newToken}`
                //     return axiosInstance(originalRequest)
                // }

            }
            else if (status === 400) {
                console.log("400 Bad request", error);
            }
            else if (status === 403) {
                console.log("403 Forbidden", error)
            }
            else if (status === 404) {
                console.log("404 Not found", error);
            }
            else if (status === 409) {
                console.log("409 Conflict", error);
            }
            else if (status === 500) {
                console.log("500 Internal server error", error);
            }
        }
        else if (error.request) {
            console.log("Error: NO response from server",error);

        }
        else {
            console.log("Error: ", error);
        }

        return Promise.reject(error)
    }

)

// axiosInstance.interceptors.request.use(
//     (config)=> {
//         const token = accessToken
//         if(token){
//             config.headers.Authorization = `Bearer ${token}`
//         }
//     },
//     (error) => {
//         return Promise.reject({
//             message: "axios instance request error",
//             details: error
//         })
//     }
// )