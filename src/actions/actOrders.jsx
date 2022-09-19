import { NEW_ORDER } from "../const/index";

export const actNewOrder = (data) => {
   return { type: NEW_ORDER, data };
};
