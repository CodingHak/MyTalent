import {
    ADD_WISHLIST,
    DELETE_WISHLIST,
    CLEAR,
   
  } from '../action/actionTypes';
  
  const initialState = [];
  
  export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WISHLIST:
        let data = state;
        let i = data.findIndex(item => item.id == action.payload.id);
        if(i < 0){
          state.push(action.payload);
        }     
        return [...state];
        
      case DELETE_WISHLIST:
        data = state;
        i = data.findIndex(item => item.id == action.payload);
          data.splice(i, 1);
        return [...data];
  
      case CLEAR:
        return initialState;
  
      default:
        return state;
    }
  };
  