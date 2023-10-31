import {
    WS_ALL_CONNECTION_SUCCESS,
    WS_ALL_CONNECTION_ERROR,
    WS_ALL_CONNECTION_CLOSED,
    WS_ALL_GET_MESSAGE
  } from '../actions/ws-all';

  import { WSMessage } from '../../utils/types';
  import { AppActions } from '../actions/types';
  
  type TWSState = {
    wsConnected: boolean;
    messages?: WSMessage;
  
    error?: Event;
  }
  
  const initialState: TWSState = {
    wsConnected: false,
    messages: undefined
  };
  
  export const wsAllReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
      case WS_ALL_CONNECTION_SUCCESS:
        return {
          ...state,
          error: undefined,
          wsConnected: true
        };
  
      case WS_ALL_CONNECTION_ERROR:
        return {
          ...state,
          error: action.payload,
          wsConnected: false
        };
  
      case WS_ALL_CONNECTION_CLOSED:
        return {
          ...state,
          error: undefined,
          wsConnected: false
        };
  
      case WS_ALL_GET_MESSAGE:

        const msg = { ...action.payload };
        return {
          ...state,
          error: undefined,
          messages: msg
        };
  
      default:
        return state;
    }
  };