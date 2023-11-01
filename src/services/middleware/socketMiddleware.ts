import type { Middleware, MiddlewareAPI } from 'redux';

import type {
  AppDispatch,
  WSMessage
} from '../../utils/types';

import { RootState } from '../reducers';
import type { AppActions, TWSStoreActions, TWSAllStoreActions } from '../actions/types';
import { wsAllUrl, wsUrl } from '../../utils/constants';

export const socketMiddleware = (param: 'user' | 'all', wsActions: TWSStoreActions | TWSAllStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    const token = localStorage.getItem("accessToken") === null ? '' : localStorage.getItem("accessToken")!.split(' ')[1]
    const url = (param === 'user') ? `${wsUrl}?token=${token}` : wsAllUrl

    return next => (action: AppActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { 
        wsInit, onOpen, onClose, onError, onMessage
       } = wsActions;
      if (type === wsInit) {
        socket = new WebSocket(url);
        
        
      }
      if (type === onClose) {
        socket?.close()
        
        
      }
      if (socket !== null) {
        socket.onopen = () => {
          
          dispatch({ type: onOpen});
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
          
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