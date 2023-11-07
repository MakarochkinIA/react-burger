import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import { socketMiddleware } from './middleware/socketMiddleware';
import type { TWSStoreActions, TWSAllStoreActions } from './actions/types';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from './actions/ws';
import {
  WS_ALL_CONNECTION_CLOSED,
  WS_ALL_CONNECTION_ERROR,
  WS_ALL_CONNECTION_START,
  WS_ALL_CONNECTION_SUCCESS,
  WS_ALL_GET_MESSAGE,
} from './actions/ws-all';

const wsActions: TWSStoreActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

const wsAllActions: TWSAllStoreActions = {
  wsInit: WS_ALL_CONNECTION_START,
  onOpen: WS_ALL_CONNECTION_SUCCESS,
  onClose: WS_ALL_CONNECTION_CLOSED,
  onError: WS_ALL_CONNECTION_ERROR,
  onMessage: WS_ALL_GET_MESSAGE
};

const enhancer = applyMiddleware(
  thunk,
  socketMiddleware(wsAllActions),
  socketMiddleware(wsActions)
);

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
}) 