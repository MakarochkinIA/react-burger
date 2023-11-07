import { getOrderRequest } from '../../utils/burger-api';
import { DELETE_ALL_INGREDIENTS } from './current-ingredients';
import { AppThunk, AppDispatch } from '../../utils/types';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export function getOrder(props: string[]) {
  return function(dispatch: AppDispatch) {
    dispatch({
        type: GET_ORDER_REQUEST
      });
      getOrderRequest(props).then(res => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.order
        });
        dispatch({
          type: DELETE_ALL_INGREDIENTS
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAILED
        });
        alert(error.message);
      });
    };
  }
