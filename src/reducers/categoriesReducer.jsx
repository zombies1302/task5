  import {ADD_CATEGORIES_TO_STORE} from "../const/index";


  const categoriesReducer = (state = [], action) => {
    switch (action.type) {    
      case ADD_CATEGORIES_TO_STORE:
      //code đưa sách vào store

      action.data.forEach( s => {
        state= [...state, 
        {_id:s._id,name:s.name,rank:s.rank }
        ];
      });      
      return state;
      default:
      return state;
    }
  };
  export default categoriesReducer
