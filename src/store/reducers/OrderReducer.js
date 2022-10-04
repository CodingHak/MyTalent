import {
  CLEAR,
  CANCEL_DATA,
  ORDER_DATA,
  FILTERED_DATA,
  UNFILTERED_DATA
} from '../action/actionTypes';
import { showMessage, hideMessage } from "react-native-flash-message";
const initialState = { items: [] }

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {

    case ORDER_DATA:
      return action.payload

    // case CANCEL_DATA:
    //   return {
    //     ...state, items: {items: state.payload.filter((i)=>i.id !==action.payload)}
    //   }
    case FILTERED_DATA:
      return action.payload

    // case UNFILTERED_DATA:
    //   return action.payload

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};
