import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from '../reducers/user';
import { setAuthChecked, setUser, GET_USER_FAILED, GET_USER_REQUEST } from '../actions/auth'


const initStore = {
    userRequest: false,
    userFailed: false,
    user: undefined,
    isAuthChecked: false,
};


const user = {
    email: 'test@test.com',
    name: 'testUser'
  }

const storeUserSuccess = {
    userRequest: false,
    userFailed: false,
    user: user,
    isAuthChecked: false,
}
const storeUserFailed = {
    userRequest: false,
    userFailed: true,
    user: undefined,
    isAuthChecked: false,
}
const storeUserRequest = {
    userRequest: true,
    userFailed: false,
    user: undefined,
    isAuthChecked: false,
}
const storeUserChecked = {
    userRequest: false,
    userFailed: false,
    user: user,
    isAuthChecked: true,
}

describe('Проверка экшенов и редьюсеров', () => {
    const enhancer = applyMiddleware(thunk);
    const store = configureStore({
        reducer: userReducer,
        enhancers: [enhancer],
    });
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
    it('Диспатчим экшен запроса юзера и сравниваем с желаемым стейтом', async ()=>{
        const {getState} = store
        expect(getState()).toStrictEqual(initStore)
        store.dispatch({
            type: GET_USER_FAILED
        })
        expect(getState()).toStrictEqual(storeUserFailed)
    })

})