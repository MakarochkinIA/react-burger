import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers/index';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import { socketMiddleware } from './services/middleware/socketMiddleware';
import type { TWSStoreActions, TWSAllStoreActions } from './services/actions/types';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from './services/actions/ws';
import {
  WS_ALL_CONNECTION_CLOSED,
  WS_ALL_CONNECTION_ERROR,
  WS_ALL_CONNECTION_START,
  WS_ALL_CONNECTION_SUCCESS,
  WS_ALL_GET_MESSAGE,
  WS_ALL_SEND_MESSAGE
} from './services/actions/ws-all';


const wsAllUrl: string = 'ws://norma.nomoreparties.space/orders/all';
const wsUrl: string = 'ws://norma.nomoreparties.space/orders/all';


const wsActions: TWSStoreActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

const wsAllActions: TWSAllStoreActions = {
  wsInit: WS_ALL_CONNECTION_START,
  wsSendMessage: WS_ALL_SEND_MESSAGE,
  onOpen: WS_ALL_CONNECTION_SUCCESS,
  onClose: WS_ALL_CONNECTION_CLOSED,
  onError: WS_ALL_CONNECTION_ERROR,
  onMessage: WS_ALL_GET_MESSAGE
};

const enhancer = applyMiddleware(
  thunk,
  socketMiddleware('all', wsAllActions),
  socketMiddleware('user', wsActions)
);

const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
}) 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
          <Provider store={store}>
              <App />
          </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
