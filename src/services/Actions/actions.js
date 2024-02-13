import { ADD_TO_CART } from "../constants"
import { REMOVE_FROM_CART } from "../constants"

export const addToCart = (data) =>{
  // console.log("action", data);
  return{
    data: data,
    type: ADD_TO_CART
  }
}
export const removeFromCart = () =>{
  // console.log("action", data);
  return{

    type: REMOVE_FROM_CART
  }
}