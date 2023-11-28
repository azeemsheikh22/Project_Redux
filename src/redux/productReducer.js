import { Product_List, Set_Product_List } from "./config";

 

export const producttlists = (data = [], action) =>{

    switch (action.type) {
        case Set_Product_List:
            console.log("productreducer",action)
            return [...action.data]

        default:
            return data

    }
} 