import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { constructorIngredientsReducer } from './current-ingredients';
import { currentIngredientReducer } from './ingredient';
import { orderReducer } from './order';
import { userReducer } from './user';
import { wsAllReducer } from './ws-all';
import { wsReducer } from './ws';
import { currentOrderReducer } from './current-order'

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  user: userReducer,
  wsAll: wsAllReducer,
  ws: wsReducer,
  currentOrder: currentOrderReducer
});

export type RootState = ReturnType<typeof rootReducer>;