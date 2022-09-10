  import {ADD_PRODUCTS_TO_STORE} from "../const/index";


  const productReducer = (state = [], action) => {
    switch (action.type) {    
      case ADD_PRODUCTS_TO_STORE:
      //code đưa sách vào store

      action.data.forEach( s => {
        state= [...state, 
        {_id: s._id, id_cat: s.id_cat, name: s.name, price:s.price,price_sale: s.price_sale,images:s.images,describe:s.describe,hide:s.hide,view:s.view}
        ];
      });      
      return state;
      default:
      return state;
    }
  };
  export default productReducer
