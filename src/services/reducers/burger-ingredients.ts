import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,

  } from '../actions/burger-ingredients';
  import { AppActions } from '../actions/types';
  import { Ingredient } from '../../utils/types';
  import { indexIngredients } from '../../utils/utils';
  

  type TBurgerIngredientsState = {
    ingredientsRequest: boolean;
    ingredients: Ingredient[];
    ingredientsFailed: boolean,
    indexedIngredients?: {[key: string]: Ingredient}
  }

export const initialState: TBurgerIngredientsState = {
    ingredientsRequest: false,
    ingredients: [],
    ingredientsFailed: false
  };
  
  export const burgerIngredientsReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          ingredientsRequest: true
        };
      }
      case GET_INGREDIENTS_SUCCESS: {
        return {
          ...state,
          ingredientsFailed: false,
          ingredients: action.payload,
          ingredientsRequest: false,
          indexedIngredients: indexIngredients(action.payload)
        };
      }
      case GET_INGREDIENTS_FAILED: {
        return { ...state, ingredientsFailed: true, ingredientsRequest: false };
      }
      default: {
        return state;
      }
    }
  };