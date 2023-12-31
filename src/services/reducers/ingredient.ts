import {
    ADD_CURRENT_INGREDIENT,
    DELETE_CURRENT_INGREDIENT,
  } from '../actions/ingredient';

import { AppActions } from '../actions/types';
import { Ingredient } from '../../utils/types';

type TCurrentIngredientState = {
    ingredient?: Ingredient;
  }

export const initialState: TCurrentIngredientState = {
    ingredient: undefined
  };

  export const currentIngredientReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case ADD_CURRENT_INGREDIENT: {
            return {
                ...state,
                ingredient: action.payload
            }
        }
        case DELETE_CURRENT_INGREDIENT: {
            return {
                ...state,
                ingredient: undefined
            }
        }
        default: {
            return state;
        }
    }
};