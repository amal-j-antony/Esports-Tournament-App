import axios from "axios";
import { serverURL } from "./serverURL";

// export const axiosConfig = async (httpmethod,url,reqBody,headers) => {
//     const reqConfig = {
//         method: httpmethod,
//         url,
//         data: reqBody,
//         headers
//     }

//     return await axios(reqConfig).then(res => {
//         return res
//     }).catch(err => {
//         return err
//     })
// }


export const api = axios.create({
    baseURL: serverURL,
    timeout: 5000,
    withCredentials: true
})

axiosConfig.interceptors.response.use(
    (response) => {
        console.log("response received", response);
        return response
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;


            if (status === 401) {
                console.log("401 Unauthorized", error);
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
            console.log("Error: NO response from server");

        }
        else {
            console.log("Error: ", error);
        }

        return Promise.reject(error)
    }

)