import { ADD_PRODUCTS_TO_STORE} from "../const/index";

export const actAddProductsToStore = (data) => {
  return { type: ADD_PRODUCTS_TO_STORE, data};
};
