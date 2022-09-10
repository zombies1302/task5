import { ADD_CATEGORIES_TO_STORE} from "../const/index";

export const actAddCategoriesToStore = (data) => {
  return { type: ADD_CATEGORIES_TO_STORE, data};
};
