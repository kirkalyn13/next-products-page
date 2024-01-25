import { API_URL } from "../config/config"
import { buildUri } from "../utils/uriBuilder"

const getProductEndpoint = (id: string = "", path: string = ""): string => API_URL + "/products" + path + `${id !== "" ? "/" + id : ""}`
const revalidate =  {
    next: {
        revalidate: 60
    }
}

export const getProductsWithSearch = async (q: string) => {
    try {
        const queryParams = {
            q
        }
        const res = await fetch(buildUri(getProductEndpoint("/search"), queryParams), revalidate)  
        return await res.json() 
    } catch (err) {
        console.error(err)
    }
}

export const getProductByID = async (id: string) => {
    try {
        const res = await fetch(buildUri(getProductEndpoint(id)), revalidate)  
        return await res.json() 
    } catch (err) {
        console.error(err)
    }
}