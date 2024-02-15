import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"

//register API
export const registerAPI=async(student)=>{
    return await commonAPI("POST",`${SERVER_URL}/regi`,student,"")
}

//get details api
export const getallDetailAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/stddetail`,"","")
}