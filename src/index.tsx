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


const enhancer = applyMiddleware(thunk);

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
