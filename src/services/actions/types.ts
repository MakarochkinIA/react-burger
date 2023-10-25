import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
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
  import type { WSMessage, TUser, Ingredient } from '../../utils/types';
  
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
    readonly payload: TUser;
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
    readonly payload: Ingredient;
  }
  export interface IMoveIngredientAction {
    readonly type: typeof MOVE_INGREDIENT;
    readonly payload: TMoveIngredientPayload;
  }
  export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: Ingredient;
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
    readonly payload: number;
  }
  export interface IGetOrderFailedAction {
    readonly type: typeof GET_ORDER_FAILED;
  }

  
  export type TGetOrderActions =
    | IGetOrderRequestAction
    | IGetOrderSuccessAction
    | IGetOrderFailedAction;
  
  export interface IWSConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
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
  
  export interface IWSSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE;
    readonly payload: {message: string};
  }
  
  export type TWSActions =
    | IWSConnectionStart
    | IWSConnectionSuccessAction
    | IWSConnectionErrorAction
    | IWSConnectionClosedAction
    | IWSGetMessageAction
    | IWSSendMessageAction;


export type AppActions = 
    | TGetUserActions
    | TGetIngredientsRequestActions
    | TGetIngredientActions
    | TCurrentIngredientActions
    | TGetOrderActions
    | TWSActions

