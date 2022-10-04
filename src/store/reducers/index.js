import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";
import { cartReducer } from "./cartReducer";
import { addressReducer } from "./addressReducer";
import { wishlistReducer } from "./wishlistReducer";
import { orderReducer } from "./OrderReducer";

export default combineReducers({ 
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    address:addressReducer,
    wishlist: wishlistReducer,
    orders:orderReducer
   
})