import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { wsAllReducer } from '../reducers/ws-all';
import {
    WS_ALL_CONNECTION_SUCCESS,
    WS_ALL_CONNECTION_ERROR,
    WS_ALL_CONNECTION_CLOSED,
    WS_ALL_GET_MESSAGE
  } from '../actions/ws-all';
import { initialState as initStore } from '../reducers/ws-all';

const wsMessage = {
    "success": true,
    "orders": [
        {
            "_id": "654d0119c2cc61001b3d6afa",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0948",
                "643d69a5c3f7b9001cfa0947",
                "643d69a5c3f7b9001cfa0947",
                "643d69a5c3f7b9001cfa0947",
                "643d69a5c3f7b9001cfa0948",
                "643d69a5c3f7b9001cfa0949",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa0943"
            ],
            "status": "done",
            "name": "Space флюоресцентный фалленианский экзо-плантаго альфа-сахаридный метеоритный бургер",
            "createdAt": "2023-11-09T15:56:09.228Z",
            "updatedAt": "2023-11-09T15:56:09.491Z",
            "number": 25687
        },
    ],
    "total": 1,
    "totalToday": 1
}

const error = new Event('error')

const storeError = {
    ...initStore,
    error: error

}
const storeSuccess = {
    ...initStore,
    error: undefined,
    wsConnected: true
}
const storeGetMessage = {
    ...initStore,
    error: undefined,
    messages: wsMessage,
    wsConnected: true
}
const storeClosed = {
    ...initStore,
    error: undefined,
    wsConnected: false,
    messages: wsMessage,
}

describe('Проверка редьюсера: wsAllReducer', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: wsAllReducer,
        enhancers: [enhancer],
    });
    it('Проверка initialState', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        expect(wsAllReducer(undefined, {})).toStrictEqual(initStore)
    })
    it('Диспатчим экшен успешного подключения к WS и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: WS_ALL_CONNECTION_SUCCESS,
        })
        expect(getState()).toStrictEqual(storeSuccess)
    })
    it('Диспатчим экшен уполучения сообщения и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeSuccess)
        store.dispatch({
            type: WS_ALL_GET_MESSAGE,
            payload: wsMessage
        })
        expect(getState()).toStrictEqual(storeGetMessage)
    })
    it('Диспатчим экшен закрытия соединения и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeGetMessage)
        store.dispatch({
            type: WS_ALL_CONNECTION_CLOSED
        })
        expect(getState()).toStrictEqual(storeClosed)
    })
})

describe('Проверка WS_ALL_CONNECTION_ERROR', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: wsAllReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен получения ошибки и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: WS_ALL_CONNECTION_ERROR,
            payload: error
        })
        expect(getState()).toStrictEqual(storeError)
    })

})