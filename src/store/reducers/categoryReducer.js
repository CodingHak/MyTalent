import {SAVE_CATEGORY,CLEAR} from '../action/actionTypes'

const initialState = {};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CATEGORY:
          return action.payload;
       
        
    //   case CLEAR:
    //           return initialState;

          default:
            return state;
    }
}