
import { combineReducers } from "redux";
import { cartdata } from "./reducer";
import { producttlists } from "./productReducer";

export default combineReducers({
    cartdata,
    producttlists
    
})
