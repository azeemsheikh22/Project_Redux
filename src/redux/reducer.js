import { Add_To_Cart, Remove_Cart } from "./config";

export const cartdata = (data = [], action) => {
  // if(action.type === Add_To_Cart){
  //     console.warn("reducer", action)
  //     return action.data
  // }else{
  //     return "no action match"
  // }

  switch (action.type) {
    case Add_To_Cart:
      console.warn("reducer", action);

      return [action.data, ...data];
    case Remove_Cart:
      console.warn("reducerremove", action);
      const remaningitem = data.filter((item) => item._id !== action.data);
      return [...remaningitem];
    default:
      return data;
  }
};
