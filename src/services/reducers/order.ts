import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,

} from '../actions/order';
import { AppActions } from '../actions/types';
import { TUser } from '../../utils/types';

type TOrderState = {
    orderRequest: boolean;
    orderFailed: boolean;
    orderNumber: number | null
  }

const initialState: TOrderState = {
    orderRequest: false,
    orderFailed: false,
    orderNumber: null
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
            return { ...state, orderFailed: false, orderNumber: action.payload, orderRequest: false };
        }
        case GET_ORDER_FAILED: {
            return { ...state, orderFailed: true, orderRequest: false, orderNumber: null };
        }
        default: {
            return state;
        }
    }
};