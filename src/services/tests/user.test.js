import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from '../reducers/user';
import { setAuthChecked, setUser, GET_USER_FAILED, GET_USER_REQUEST } from '../actions/auth'
import { initialState as initStore } from '../reducers/user';

const user = {
    email: 'test@test.com',
    name: 'testUser'
  }

const storeUserSuccess = {
    ...initStore,
    userRequest: false,
    userFailed: false,
    user: user,
    isAuthChecked: false,
}
const storeUserFailed = {
    ...initStore,
    userRequest: false,
    userFailed: true,
    user: undefined,
    isAuthChecked: false,
}
const storeUserRequest = {
    ...initStore,
    userRequest: true,
    userFailed: false,
    user: undefined,
    isAuthChecked: false,
}
const storeUserChecked = {
    ...initStore,
    userRequest: false,
    userFailed: false,
    user: user,
    isAuthChecked: true,
}

describe('Проверка редьюсера: userReducer', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: userReducer,
        enhancers: [enhancer],
    });
    it('Проверка initialState', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        expect(userReducer(undefined, {})).toStrictEqual(initStore)
    })
    it('Диспатчим экшен запроса юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_USER_REQUEST
        })
        expect(getState()).toStrictEqual(storeUserRequest)
    })
    
    it('Диспатчим экшен успешного получения юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeUserRequest)
        store.dispatch(setUser(user))
        expect(getState()).toStrictEqual(storeUserSuccess)
    })
    it('Диспатчим экшен проверки авторизации и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(storeUserSuccess)
        store.dispatch(setAuthChecked(true))
        expect(getState()).toStrictEqual(storeUserChecked)
    })

})

describe('Проверка GET_USER_FAILED', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: userReducer,
        enhancers: [enhancer],
    });
    it('Диспатчим экшен неудачного запроса юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_USER_FAILED
        })
        expect(getState()).toStrictEqual(storeUserFailed)
    })

})