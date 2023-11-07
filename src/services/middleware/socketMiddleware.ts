import type { Middleware, MiddlewareAPI } from 'redux';
import { refreshToken } from '../../utils/burger-api';

import type {
  AppDispatch,
  WSMessage
} from '../../utils/types';
import { myAlert } from '../../utils/utils';
import { RootState } from '../reducers';
import type { AppActions, TWSStoreActions, TWSAllStoreActions } from '../actions/types';
import { wsUrl } from '../../utils/constants';


export const socketMiddleware = (wsActions: TWSStoreActions | TWSAllStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: AppActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { 
        wsInit, onOpen, onClose, onError, onMessage
       } = wsActions;
      if (type === wsInit) {
        socket = new WebSocket(action.payload);
        
        
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
          setTimeout(
            () => {
              dispatch({ type: wsInit, payload: socket!.url })
            },
            5000
          );
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData: WSMessage | {success: string, message: string} = JSON.parse(data);
          if ('message' in parsedData) {
            if (parsedData.message === 'Invalid or missing token') {
              refreshToken()
              .then((refreshData) => {
                localStorage.setItem("refreshToken", refreshData.refreshToken);
                localStorage.setItem("accessToken", refreshData.accessToken);
                const token = refreshData.accessToken.split(' ')[1]
                dispatch({ 
                  type: wsInit,
                  payload: `${wsUrl}?token=${token}`
                });
              })
              .catch((error) => {
                myAlert(error);
              });
              
            }
          } else {
            dispatch({ type: onMessage, payload: { ...parsedData} });
          }
          
        };

        socket.onclose = () => {
          dispatch({ type: onClose});
        };
      }

      next(action);
    };
  }) as Middleware;
};