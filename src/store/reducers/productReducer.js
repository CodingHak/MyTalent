import {SAVE_PRODUCT,CLEAR} from '../action/actionTypes'

const initialState = {};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PRODUCT:
          return action.payload;
            // case CLEAR:
            //   return initialState;

          default:
            return state;
    }
}