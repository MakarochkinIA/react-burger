import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    DELETE_ALL_INGREDIENTS
  } from '../actions/current-ingredients';
  import update from 'immutability-helper'
  import { AppActions } from '../actions/types';
  import { Ingredient } from '../../utils/types';
  
  export type TConstructorIngredientState = {
    bun?: Ingredient;
    ingredients: Array<Ingredient & {key: string}>;
}


 const initialState: TConstructorIngredientState = {
    bun: undefined,
    ingredients: []
};
function removeFirstOccurrence(arr: Array<Ingredient & {key: string}>, item: Ingredient & {key: string}) {
    const index = arr.indexOf(item);
    const newArr = [...arr]
    if (index !== -1) {
        newArr.splice(index, 1);
    }
    return newArr
  }

const moveCard = (dragIndex: number, hoverIndex: number, prevState: Array<Ingredient & {key: string}>) => {
    return update(prevState, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevState[dragIndex]],
        ],
      })
}

export const constructorIngredientsReducer = (state = initialState, action: AppActions): TConstructorIngredientState => {
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