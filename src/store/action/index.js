import { SAVE_USER, CLEAR, PROFILE_IMAGE, SAVE_PRODUCT, SAVE_CATEGORY, SAVE_CART, ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_ADDRESS, DECREASE_CART_QTY, INCREASE_CART_QTY, ADD_ADDRESS, DELETE_ADDRESS, ADD_WISHLIST, DELETE_WISHLIST, ADD_CARD_DATA, ORDER_DATA, CANCEL_DATA, FILTERED_DATA, UNFILTERED_DATA } from './actionTypes'

export const saveUserData = data => ({
  type: SAVE_USER,
  payload: data
});

export const saveUserProfile = data => ({
  type: PROFILE_IMAGE,
  payload: data
});

export const saveProductData = data => ({
  type: SAVE_PRODUCT,
  payload: data
});

export const addWishlist = data => ({
  type: ADD_WISHLIST,
  payload: data
});

export const deleteWishlist = data => ({
  type: DELETE_WISHLIST,
  payload: data
});

export const saveCartItem = data => ({
  type: SAVE_CART,
  payload: data
})

export const addCartItem = data => ({
  type: ADD_CART_ITEM,
  payload: data
});

export const getOrderData = data => ({
  type: ORDER_DATA,
  payload: data
})

export const filteredData = data => ({
  type: FILTERED_DATA,
  payload: data
})

export const unFilteredData = data => ({
  type: UNFILTERED_DATA,
  payload: data
})

export const cancelOrder = data => ({
  type: CANCEL_DATA,
payload: data
})

export const addCardData = data => ({
  type: ADD_CARD_DATA,
  payload: data
})

export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

export const decreaseCartQty = id => ({
  type: DECREASE_CART_QTY,
  payload: id
});

export const increaseCartQty = id => ({
  type: INCREASE_CART_QTY,
  payload: id
});


export const addAddress = data => ({
  type: ADD_ADDRESS,
  payload: data
});

export const deleteAddress = data => ({
  type: DELETE_ADDRESS,
  payload: data
});

export const updateAddress = data => ({
  type: UPDATE_ADDRESS,
  payload: data
});

export const saveCategoryData = data => ({
  type: SAVE_CATEGORY,
  payload: data
});


export const clear = () => ({
  type: CLEAR
});