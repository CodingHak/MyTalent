import { CLEAR, ADD_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS} from '../action/actionTypes'
import { showMessage, hideMessage } from "react-native-flash-message";

const initialState = [];

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            let data = state;
            let i = data.findIndex(item => item.id == action.payload.id);
            if(i < 0){
              state.push(action.payload);
            } else {
              showMessage({
                message: "Address Already exist...",
                type: "danger",
              });
            }      
            return [...state];

        case DELETE_ADDRESS:
             i = state.findIndex(item=>item.id == action.payload)
            if(i >= 0){
              state.splice(state[i],1);
            }
            console.log(state)

            data = state;
            i = data.findIndex(item => item.id == action.payload);
            if (state[i]< 1) {
              data.splice(i, 1);
            }
            return [...data];
        
        case UPDATE_ADDRESS:
           data = state;
           i = data.findIndex(item => item.id == action.payload.id);
           data[i].name=action.payload.name
           data[i].fulladdress=action.payload.fulladdress
           data[i].houseno=action.payload.houseno
           data[i].pincode=action.payload.pincode
           data[i].mobileno=action.payload.mobileno
           return [...data];

        case CLEAR:
          return initialState;

        default:
          return state;
    }
}