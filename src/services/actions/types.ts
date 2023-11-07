import {
  WS_ALL_CONNECTION_SUCCESS,
  WS_ALL_CONNECTION_ERROR,
  WS_ALL_CONNECTION_CLOSED,
  WS_ALL_GET_MESSAGE,
  WS_ALL_CONNECTION_START,
} from './ws-all';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_START,
} from './ws';
import {
  SET_AUTH_CHECKED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from './auth';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from './burger-ingredients';
import {
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  DELETE_INGREDIENT,
  DELETE_ALL_INGREDIENTS,
} from './current-ingredients';
import {
  ADD_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from './ingredient';
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from './order';
import { 
  ADD_CURRENT_ORDER,
  DELETE_CURRENT_ORDER
 } from './current-order';
import type { WSMessage, TUser, Ingredient, FullOrder, OrderState } from '../../utils/types';

interface TMoveIngredientPayload {
  dragIndex: number;
  hoverIndex: number
}


export interface ISetAuthCheckedAction {
  readonly type: typeof SET_AUTH_CHECKED;
  readonly payload: boolean;
}

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: TUser | undefined;
}
export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}


export type TGetUserActions =
  | ISetAuthCheckedAction
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserFailedAction;


export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Ingredient[];
}
export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TGetIngredientsRequestActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction


export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: Ingredient & { key: string };
}
export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: TMoveIngredientPayload;
}
export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: Ingredient & { key: string };
}
export interface IDeleteAllIngredientsAction {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}

export type TGetIngredientActions =
  | IAddIngredientAction
  | IMoveIngredientAction
  | IDeleteIngredientAction
  | IDeleteAllIngredientsAction;


export interface IAddCurrentIngredientAction {
  readonly type: typeof ADD_CURRENT_INGREDIENT;
  readonly payload: Ingredient;
}
export interface IDeleteCurrentIngredientAction {
  readonly type: typeof DELETE_CURRENT_INGREDIENT;
}

export type TCurrentIngredientActions =
  | IAddCurrentIngredientAction
  | IDeleteCurrentIngredientAction;


export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: OrderState;
}
export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}


export type TGetOrderActions =
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction;

export interface IWSAllConnectionStart {
  readonly type: typeof WS_ALL_CONNECTION_START;
  readonly payload: string;
}

export interface IWSAllConnectionSuccessAction {
  readonly type: typeof WS_ALL_CONNECTION_SUCCESS;
}

export interface IWSAllConnectionErrorAction {
  readonly type: typeof WS_ALL_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSAllConnectionClosedAction {
  readonly type: typeof WS_ALL_CONNECTION_CLOSED;
}

export interface IWSAllGetMessageAction {
  readonly type: typeof WS_ALL_GET_MESSAGE;
  readonly payload: WSMessage;
}


export type TWSAllActions =
  | IWSAllConnectionStart
  | IWSAllConnectionSuccessAction
  | IWSAllConnectionErrorAction
  | IWSAllConnectionClosedAction
  | IWSAllGetMessageAction


export interface IWSConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}

export interface IWSConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: WSMessage;
}


export type TWSActions =
  | IWSConnectionStart
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction



export interface IAddCurrderntOrderAction {
  readonly type: typeof ADD_CURRENT_ORDER;
  readonly payload: FullOrder;
}
export interface IDeleteCurrderntOrderAction {
  readonly type: typeof DELETE_CURRENT_ORDER;
}

export type TCurrentOrderActions =
  | IAddCurrderntOrderAction
  | IDeleteCurrderntOrderAction;


export type AppActions =
  | TGetUserActions
  | TGetIngredientsRequestActions
  | TGetIngredientActions
  | TCurrentIngredientActions
  | TGetOrderActions
  | TWSActions
  | TWSAllActions
  | TCurrentOrderActions


export type TWSStoreActions = {
  wsInit: typeof  WS_CONNECTION_START,
  onOpen: typeof  WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof  WS_CONNECTION_ERROR,
  onMessage: typeof  WS_GET_MESSAGE,
};

export type TWSAllStoreActions = {
  wsInit: typeof  WS_ALL_CONNECTION_START,
  onOpen: typeof  WS_ALL_CONNECTION_SUCCESS,
  onClose: typeof WS_ALL_CONNECTION_CLOSED,
  onError: typeof  WS_ALL_CONNECTION_ERROR,
  onMessage: typeof  WS_ALL_GET_MESSAGE,
};