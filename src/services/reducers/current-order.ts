import {
    ADD_CURRENT_ORDER,
    DELETE_CURRENT_ORDER,
  } from '../actions/current-order';

import { AppActions } from '../actions/types';
import { FullOrder } from '../../utils/types';

type TCurrentOrderState = {
    order?: FullOrder;
  }

const initialState: TCurrentOrderState = {
    order: undefined
  };

  export const currentOrderReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case ADD_CURRENT_ORDER: {
            return {
                ...state,
                order: action.payload
            }
        }
        case DELETE_CURRENT_ORDER: {
            return {
                ...state,
                order: undefined
            }
        }
        default: {
            return state;
        }
    }
};