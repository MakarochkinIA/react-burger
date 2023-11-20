import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { burgerIngredientsReducer } from '../reducers/burger-ingredients';
import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
} from '../actions/burger-ingredients'
import { initialState as initStore } from '../reducers/burger-ingredients';


const ingredients = [
    {
        "_id":"60666c42cc7b410027a1a9bf",
        "name":"Сыр с астероидной плесенью",
        "type":"main",
        "proteins":84,
        "fat":48,
        "carbohydrates":420,
        "calories":3377,
        "price":4142,
        "image":"https://code.s3.yandex.net/react/code/cheese.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9b2",
        "name":"Флюоресцентная булка R2-D3",
        "type":"bun",
        "proteins":44,
        "fat":26,
        "carbohydrates":85,
        "calories":643,
        "price":988,
        "image":"https://code.s3.yandex.net/react/code/bun-01.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
        "__v":0
     }
]
const indexedIngredients = {
    "60666c42cc7b410027a1a9bf": {
        "_id":"60666c42cc7b410027a1a9bf",
        "name":"Сыр с астероидной плесенью",
        "type":"main",
        "proteins":84,
        "fat":48,
        "carbohydrates":420,
        "calories":3377,
        "price":4142,
        "image":"https://code.s3.yandex.net/react/code/cheese.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
        "__v":0
     },
     "60666c42cc7b410027a1a9b2": {
        "_id":"60666c42cc7b410027a1a9b2",
        "name":"Флюоресцентная булка R2-D3",
        "type":"bun",
        "proteins":44,
        "fat":26,
        "carbohydrates":85,
        "calories":643,
        "price":988,
        "image":"https://code.s3.yandex.net/react/code/bun-01.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
        "__v":0
     }
}

const storeIngredientsSuccess = {
    ...initStore,
    ingredientsRequest: false,
    ingredients: ingredients,
    ingredientsFailed: false,
    indexedIngredients: indexedIngredients
};
const storeIngredientsFailed = {
    ...initStore,
    ingredientsRequest: false,
    ingredientsFailed: true,
    ingredients: []
};
const storeIngredientsRequest = {
    ...initStore,
    ingredientsRequest: true,
    ingredientsFailed: false,
    ingredients: []
};

describe('Проверка редьюсера: burgerIngredientsReducer', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: burgerIngredientsReducer,
        enhancers: [enhancer],
    });
    it('Проверка initialState', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        expect(burgerIngredientsReducer(undefined, {})).toStrictEqual(initStore)
    })
    it('Диспатчим экшен запроса ингредиентов и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        expect(getState()).toStrictEqual(storeIngredientsRequest)
    })
    
    it('Диспатчим экшен успешного получения ингредиентов и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeIngredientsRequest)
        store.dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: ingredients
        })
        expect(getState()).toStrictEqual(storeIngredientsSuccess)
    })
})

describe('Проверка GET_INGREDIENTS_FAILED', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: burgerIngredientsReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен неудачного получения ингредиентов и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_INGREDIENTS_FAILED
        })
        expect(getState()).toStrictEqual(storeIngredientsFailed)
    })

})