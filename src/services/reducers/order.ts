import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,

} from '../actions/order';
import { AppActions } from '../actions/types';
import { OrderState } from '../../utils/types';


type TOrderState = {
    orderRequest: boolean;
    orderFailed: boolean;
    order?: OrderState
  }

export const initialState: TOrderState = {
    orderRequest: false,
    orderFailed: false,
    order: undefined
};

export const orderReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            };
        }
        case GET_ORDER_SUCCESS: {
            return { ...state, orderFailed: false, order: action.payload, orderRequest: false };
        }
        case GET_ORDER_FAILED: {
            return { ...state, orderFailed: true, orderRequest: false, order: undefined };
        }
        default: {
            return state;
        }
    }
};