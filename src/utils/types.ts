import { CSSProperties, ReactNode } from 'react'
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import type {} from "redux-thunk/extend-redux";
import { RootState } from '../services/reducers';
import { AppActions } from '../services/actions/types';

export interface Ingredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  }

// TODO: change form
export type TForm = { [key: string]: string; }

export interface ConstructorElementEmptyProps {
    type?: '' | 'top' | 'bottom';
    text: string;
    extraClass?: CSSProperties;
  }

export interface MainElementsProps {
    index: number;
    item: Ingredient & {key: string};
    handleClose: (item: Ingredient & {key: string}) => void;
}

export interface DragItem {
    index: number;
    id: string;
    type: string;
}

export interface IngredientItemProps {
    item: Ingredient;
  }
  
export interface IngredientGroupProps {
    name: string;
    ingredients: Ingredient[];
  }

export interface ModalOverlayProps {
    onClose: () => void;
  }

export interface ModalProps {
   children: ReactNode;
   header?: string;
   onClose: () => void;
 }

export interface ProtectedProps {
    onlyUnAuth?: boolean;
    component: ReactNode;
  }

 export interface ConstructorItemProps {
   onDropHandler: (item: any) => void;
 }

export interface Order {
  ingredients: Array<string>;
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  name: string;
  updatedAt: string;
}

export interface FullOrder {
  ingredients: Array<Ingredient & {quantity: number}>;
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  name: string;
  updatedAt: string;
  cost: number
}


export interface WSMessage {
  success: boolean;
  orders: Order[];
  total: number;
  totalToday: number;

}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppActions
  >;

export type AppDispatch<TReturnType = void> = (
    action: AppActions | AppThunk<TReturnType>
  ) => TReturnType;

export type TUser = {
  email: string;
  name: string;
}

export interface FeedCardProps {
    order: FullOrder
}

export interface FeedIngredientsProps {
  ingredients: Ingredient[];
}

export interface IngredientListProps {
  ingredients: (Ingredient & { quantity: number; })[];
}