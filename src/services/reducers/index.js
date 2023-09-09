import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { constructorIngredientsReducer } from './current-ingredients';
import { currenIngredientReducer } from './ingredient'
import { orderReducer } from './order'


export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  currentIngredient: currenIngredientReducer,
  order: orderReducer
});