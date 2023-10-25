import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    SET_AUTH_CHECKED
} from '../actions/auth';
import { AppActions } from '../actions/types';
import { TUser } from '../../utils/types';

type TUserState = {
    userRequest: boolean;
    userFailed: boolean;
    user?: TUser;
    isAuthChecked: boolean;

  }


const initialState: TUserState = {
    userRequest: false,
    userFailed: false,
    user: undefined,
    isAuthChecked: false,
};

export const userReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case SET_AUTH_CHECKED:
            return {
                ...state,
                isAuthChecked: action.payload
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case GET_USER_FAILED: 
            return { ...state, userFailed: true, userRequest: false };
        case GET_USER_REQUEST: 
            return { ...state, userRequest: true };
        default:
            return state;
    }
};
