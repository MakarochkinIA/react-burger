import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
  } from '../actions/ws';

  import { WSMessage } from '../../utils/types';
  import { AppActions } from '../actions/types';
  
  type TWSState = {
    wsConnected: boolean;
    messages?: WSMessage;
  
    error?: Event;
  }
  
export const initialState: TWSState = {
    wsConnected: false,
    messages: undefined
  };
  
  export const wsReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          error: undefined,
          wsConnected: true
        };
  
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          error: action.payload,
          wsConnected: false
        };
  
      case WS_CONNECTION_CLOSED:
        return {
          ...state,
          error: undefined,
          wsConnected: false
        };
  
      case WS_GET_MESSAGE:
        if (Array.isArray(action.payload.orders)) {
          action.payload.orders.reverse()
          const msg = { ...action.payload };
          return {
            ...state,
            error: undefined,
            messages: msg
          };
        } else {
          return {
            ...state,
            error: undefined,
            messages: undefined
          };
        }
        
        
  
      default:
        return state;
    }
  };