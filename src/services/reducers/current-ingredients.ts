import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    DELETE_ALL_INGREDIENTS
  } from '../actions/current-ingredients';
  import update from 'immutability-helper'
  import { AppActions } from '../actions/types';
  import { Ingredient } from '../../utils/types';
  
  type TConstructorIngredientState = {
      bun: Ingredient | {};
      ingredients: Ingredient[];
    }


const initialState: TConstructorIngredientState = {
    bun: {},
    ingredients: []
};
function removeFirstOccurrence(arr: Ingredient[], item: Ingredient) {
    const index = arr.indexOf(item);
    const newArr = [...arr]
    if (index !== -1) {
        newArr.splice(index, 1);
    }
    return newArr
  }

const moveCard = (dragIndex: number, hoverIndex: number, prevState: Ingredient[]) => {
    return update(prevState, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevState[dragIndex]],
        ],
      })
}

export const constructorIngredientsReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return action.payload.type === 'bun' ? {
                ...state,
                bun: action.payload
            } : {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: removeFirstOccurrence(state.ingredients, action.payload)
            };
        }
        case DELETE_ALL_INGREDIENTS: {
            return {
                ...state,
                ingredients: initialState.ingredients,
                bun: initialState.bun
            };
        }
        case MOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: moveCard(action.payload.dragIndex, action.payload.hoverIndex, state.ingredients )
            };
        }
        default: {
            return state;
        }
    }
};