import { getOrderRequest } from '../../utils/burger-api';


export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export function getOrder(props) {
  return function(dispatch) {
    dispatch({
        type: GET_ORDER_REQUEST
      });
      getOrderRequest(props).then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.order
          });
        } else {
          dispatch({
            type: GET_ORDER_FAILED
          });
        }
      });
    };
  }
