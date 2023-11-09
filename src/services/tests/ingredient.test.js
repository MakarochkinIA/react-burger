import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { currentIngredientReducer } from '../reducers/ingredient';
import { ADD_CURRENT_INGREDIENT, DELETE_CURRENT_INGREDIENT} from '../actions/ingredient'
import { initialState as initStore } from '../reducers/ingredient';


const sourceIngredient = {
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

const resStoreWithItem = {
    ...initStore,
    ingredient: sourceIngredient
}

describe('Проверка редьюсера: currentIngredientReducer', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: currentIngredientReducer,
        enhancers: [enhancer],
    });
    it('Проверка initialState', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        expect(currentIngredientReducer(undefined, {})).toStrictEqual(initStore)
    })
    it('Диспатчим экшен добавления ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: ADD_CURRENT_INGREDIENT,
            payload: sourceIngredient
        })
        expect(getState()).toStrictEqual(resStoreWithItem)
    })
    it('Диспатчим экшен удаления ингредиента и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(resStoreWithItem)
        store.dispatch({
            type: DELETE_CURRENT_INGREDIENT
        })
        expect(getState()).toStrictEqual(initStore)
    })
})