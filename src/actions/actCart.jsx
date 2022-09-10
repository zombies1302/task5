import { ADD_CART_TO_STORE,EDIT_QUANTITY_ITEM } from "../const/index";
//action đưa giỏ hàng vào store
export const actAddToCart = (data) => {
  return { type: ADD_CART_TO_STORE, data,};
};
// action sửa số lượng sản phẩm
export const actQuantityItem = (data) => {
  return { type: EDIT_QUANTITY_ITEM, data,};
};