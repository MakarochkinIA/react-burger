import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
  } from '../actions/current-ingredients';

const initialState = {
    bun: {},
    ingredients: []
};

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
            return action.ingredient.type === 'bun' ? {
                ...state,
                bun: {}
            } : {
                ...state,
                ingredients: state.ingredients.filter(item => item.id !== action.ingredient.id)
            };
        }
        default: {
            return state;
        }
    }
};