import {
  ADD_CARD_DATA,
  ADD_CART_ITEM,
  CLEAR,
  DECREASE_CART_QTY,
  INCREASE_CART_QTY,
  REMOVE_CART_ITEM
} from '../action/actionTypes';
import { showMessage, hideMessage } from "react-native-flash-message";
const initialState = { items: [] }

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      let data = state;
      let i = data.findIndex(item => item.id == action.payload.id);
      if (i < 0) {
        state.push(action.payload);
      } else {
        showMessage({
          message: "Already exist in cart...",
          type: "danger",
        });
      }
      return [...state];

    case ADD_CARD_DATA:
      let carddata = action.payload
      state.items = carddata
      return {...state,carddata:carddata}

    case INCREASE_CART_QTY:
      let index = action.payload
      let cartTemp = [...state.carddata.items];
      cartTemp[index].quantity.value = cartTemp[index].quantity.value + 1;
      return { ...state, items: cartTemp };


    case DECREASE_CART_QTY:
      index = action.payload
      cartTemp = [...state.carddata.items];
      cartTemp[index].quantity.value = cartTemp[index].quantity.value - 1;
      return { ...state, items: cartTemp };

      case REMOVE_CART_ITEM:
        return {
          
          // ...state, favoriteMovies: [...state.favoriteMovies.slice(action.payload,+1),...state.favoriteMovies.slice(0, action.payload)], 
          ...state, items: {items: state.carddata.items.filter((i)=>i.item_key !==action.payload)}
          

      }
    

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};
