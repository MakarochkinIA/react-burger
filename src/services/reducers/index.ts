import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { constructorIngredientsReducer } from './current-ingredients';
import { currentIngredientReducer } from './ingredient';
import { orderReducer } from './order';
import { userReducer } from './user';


export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;