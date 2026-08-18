import { io } from "socket.io-client";
import { serverURL } from "./serverURL";

export const socket = io(`${serverURL}`,{
    autoConnect: false
    
})
