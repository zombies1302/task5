import { ADD_CART_TO_STORE, EDIT_QUANTITY_ITEM } from "../const/index";


const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART_TO_STORE:
      state = [...state, action.data];
      return state;
    case EDIT_QUANTITY_ITEM:
      state = action.data
      return state;
    default:
      return state;
  }
};
export default cartReducer
