import {combineReducers} from 'redux' 
import productReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';




export default combineReducers({      
    products:productReducer,
    categories:categoriesReducer,
    cart:cartReducer


})
