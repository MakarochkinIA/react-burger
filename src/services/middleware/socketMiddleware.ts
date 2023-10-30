import type { Middleware, MiddlewareAPI } from 'redux';

import type {
  AppDispatch,
  WSMessage
} from '../../utils/types';

import { RootState } from '../reducers';
import type { AppActions, TWSStoreActions, TWSAllStoreActions } from '../actions/types';

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions | TWSAllStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: AppActions) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { 
        wsInit , wsSendMessage, onOpen, onClose, onError, onMessage
       } = wsActions;
      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}`);
        
        
      }
      if (socket) {
        socket.onopen = () => {
          
          dispatch({ type: onOpen});
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
          console.log(event);
          
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData: WSMessage = JSON.parse(data);
          dispatch({ type: onMessage, payload: { ...parsedData} });
        };

        socket.onclose = () => {
          dispatch({ type: onClose});
        };
      }

      next(action);
    };
  }) as Middleware;
};