import { ADD_TO_CART } from "../constants";
import { REMOVE_FROM_CART } from "../constants";

const initialState = {
  cartData: []
}

const cartItems = (state=[], action)=>{
  switch(action.type){
    case ADD_TO_CART:
        // console.log("reducer", action);
        return[
          ...state,
          { cartData: action.data}
        ]
        break;
    case REMOVE_FROM_CART:
        // console.log("reducer", action);
        state.pop();
        return[
          ...state
        ]
        break;
      default:
      return state
    }
}

export default cartItems;
