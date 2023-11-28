
import { Add_To_Cart, Clear_Cart } from "./config"
import { Remove_Cart } from "./config"

export const addtocart = (data) =>{
 console.warn("action called",data)
    return {
        type: Add_To_Cart,
        data
    }
}

export const removecart = (data) =>{
    console.warn("remove action called",data)
    return {
        type: Remove_Cart,
        data
    }
}
export const clearcart = () =>{
    console.warn("Clear action ")
    return {
        type: Clear_Cart,
        
    }
}
