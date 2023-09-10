import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
  } from '../actions/current-ingredients';

const initialState = {
    bun: {},
    ingredients: []
};
function removeFirstOccurrence(arr, item) {
    const index = arr.indexOf(item);
    const newArr = [...arr]
    if (index !== -1) {
        newArr.splice(index, 1);
    }
    return newArr
  }

export const constructorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return action.ingredient.type === 'bun' ? {
                ...state,
                bun: action.ingredient
            } : {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: removeFirstOccurrence(state.ingredients, action.ingredient)
            };
        }
        default: {
            return state;
        }
    }
};