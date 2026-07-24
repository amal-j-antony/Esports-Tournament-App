import axios from "axios";
import { serverURL } from "./serverURL";

export const axiosConfig = async (httpmethod,url,reqBody,headers) => {
    const reqConfig = {
        method: httpmethod,
        url,
        data: reqBody,
        headers
    }

    return await axios(reqConfig).then(res => {
        return res
    }).catch(err => {
        return err
    })
}