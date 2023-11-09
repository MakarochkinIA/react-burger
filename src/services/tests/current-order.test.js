import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { currentOrderReducer } from '../reducers/current-order';
import { ADD_CURRENT_ORDER, DELETE_CURRENT_ORDER} from '../actions/current-order'
import { initialState as initStore } from '../reducers/order';


  const order = {
    ingredients: [
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
         },
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
    ],
  }
const resStoreWithItem = {
    ...initStore,
    order: order
}

describe('Проверка редьюсера: currentOrderReducer', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: currentOrderReducer,
        enhancers: [enhancer],
    });
    it('Проверка initialState', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        expect(currentOrderReducer(undefined, {})).toStrictEqual(initStore)
    })
    it('Диспатчим экшен добавления заказа и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: ADD_CURRENT_ORDER,
            payload: order
        })
        expect(getState()).toStrictEqual(resStoreWithItem)
    })
    it('Диспатчим экшен удаления заказа и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(resStoreWithItem)
        store.dispatch({
            type: DELETE_CURRENT_ORDER
        })
        expect(getState()).toStrictEqual(initStore)
    })
})