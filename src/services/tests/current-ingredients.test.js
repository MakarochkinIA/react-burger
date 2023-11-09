import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { constructorIngredientsReducer } from '../reducers/current-ingredients';
import { 
    ADD_INGREDIENT,
    MOVE_INGREDIENT,
    DELETE_ALL_INGREDIENTS,
    DELETE_INGREDIENT
 } from '../actions/current-ingredients'
import { initialState as initStore } from '../reducers/current-ingredients';


const firstBun = {
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


const secondBun = {
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


const firstIngredient = {
    "_id":"60666c42cc7b410027a1a9b3",
    "name":"Филе Люминесцентного тетраодонтимформа",
    "type":"main",
    "proteins":44,
    "fat":26,
    "carbohydrates":85,
    "calories":643,
    "price":988,
    "image":"https://code.s3.yandex.net/react/code/meat-03.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png",
    "__v":0
 }
    
const secondIngredient = {
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
     }

const storeAddBun = {
    ...initStore,
    bun: firstBun,
    ingredients: []
}
const storeChangeBun = {
    ...initStore,
    bun: secondBun,
    ingredients: []
}
const storeAddIngredient = {
    ...initStore,
    bun: undefined,
    ingredients: [
        firstIngredient
    ]
}
const storeAddSameIngredient = {
    ...initStore,
    bun: undefined,
    ingredients: [
        firstIngredient,
        firstIngredient
    ]
}
const storeAddSecondIngredient = {
    ...initStore,
    bun: undefined,
    ingredients: [
        firstIngredient,
        secondIngredient
    ]
}
const storeDeleteIngredient = {
    ...initStore,
    bun: undefined,
    ingredients: [
        secondIngredient
    ]
}
const storeDeleteOneOfTwoIngredients = {
    ...initStore,
    bun: undefined,
    ingredients: [
        firstIngredient
    ]
}
const storeMoveIngredient = {
    ...initStore,
    bun: undefined,
    ingredients: [
        secondIngredient,
        firstIngredient
    ]
}

describe('Проверка редьюсера: constructorIngredientsReducer', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: constructorIngredientsReducer,
        enhancers: [enhancer],
    });
    it('Проверка initialState', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        expect(constructorIngredientsReducer(undefined, {})).toStrictEqual(initStore)
    })
    it('Диспатчим экшен добавления 1-й булки и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: ADD_INGREDIENT,
            payload: firstBun
        })
        expect(getState()).toStrictEqual(storeAddBun)
    })
    it('Диспатчим экшен добавления 2-й булки и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeAddBun)
        store.dispatch({
            type: ADD_INGREDIENT,
            payload: secondBun
        })
        expect(getState()).toStrictEqual(storeChangeBun)
    })
})


describe('Проверка добавления и изменения разных ингредиентов ', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: constructorIngredientsReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен добавления 1-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: ADD_INGREDIENT,
            payload: firstIngredient
        })
        expect(getState()).toStrictEqual(storeAddIngredient)
    })
    it('Диспатчим экшен добавления 2-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeAddIngredient)
        store.dispatch({
            type: ADD_INGREDIENT,
            payload: secondIngredient
        })
        expect(getState()).toStrictEqual(storeAddSecondIngredient)
    })
    it('Диспатчим экшен перемещения 2-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeAddSecondIngredient)
        store.dispatch({
            type: MOVE_INGREDIENT,
            payload: {
                dragIndex: 1,
                hoverIndex: 0
            }
        })
        expect(getState()).toStrictEqual(storeMoveIngredient)
    })
    it('Диспатчим экшен удаления 1-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeMoveIngredient)
        store.dispatch({
            type: DELETE_INGREDIENT,
            payload: firstIngredient
        })
        expect(getState()).toStrictEqual(storeDeleteIngredient)
    })
    it('Диспатчим экшен удаления всех ингредиентов и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeDeleteIngredient)
        store.dispatch({
            type: DELETE_ALL_INGREDIENTS,
        })
        expect(getState()).toStrictEqual(initStore)
    })
})

describe('Проверка добавления и удаления одинакого ингредиента', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: constructorIngredientsReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен добавления 1-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: ADD_INGREDIENT,
            payload: firstIngredient
        })
        expect(getState()).toStrictEqual(storeAddIngredient)
    })
    it('Диспатчим экшен добавления 1-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeAddIngredient)
        store.dispatch({
            type: ADD_INGREDIENT,
            payload: firstIngredient
        })
        expect(getState()).toStrictEqual(storeAddSameIngredient)
    })
    it('Диспатчим экшен удаления 1-го ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeAddSameIngredient)
        store.dispatch({
            type: DELETE_INGREDIENT,
            payload: firstIngredient
        })
        expect(getState()).toStrictEqual(storeDeleteOneOfTwoIngredients)
    })
})