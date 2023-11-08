import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { orderReducer } from '../reducers/order';
import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
} from '../actions/order'

const initStore = {
    orderRequest: false,
    orderFailed: false,
    order: undefined
};
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

const storeOrderSuccess = {
    orderRequest: false,
    orderFailed: false,
    order: order
};
const storeOrderFailed = {
    orderRequest: false,
    orderFailed: true,
    order: undefined
};
const storeOrderRequest = {
    orderRequest: true,
    orderFailed: false,
    order: undefined
};

describe('Проверка экшенов и редьюсеров', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: orderReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен запроса юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_ORDER_REQUEST
        })
        expect(getState()).toStrictEqual(storeOrderRequest)
    })
    
    it('Диспатчим экшен успешного получения юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeOrderRequest)
        store.dispatch({
            type: GET_ORDER_SUCCESS,
            payload: order
        })
        expect(getState()).toStrictEqual(storeOrderSuccess)
    })
})

describe('Проверка GET_USER_FAILED', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: orderReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен запроса юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_ORDER_FAILED
        })
        expect(getState()).toStrictEqual(storeOrderFailed)
    })

})