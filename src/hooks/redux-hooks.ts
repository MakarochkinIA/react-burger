import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";

import { RootState } from "../services/reducers"; 
import { AppDispatch } from "../utils/types";
import type {} from "redux-thunk/extend-redux";

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;