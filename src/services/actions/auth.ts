import { auth } from "../../utils/auth";
import { myAlert } from "../../utils/utils";
import { AppDispatch, TUser, TForm } from '../../utils/types';
import {
  ISetAuthCheckedAction,
  IGetUserRequestAction,
  IGetUserSuccessAction,
  IGetUserFailedAction
} from "./types";

type TFunc = typeof auth.login | typeof auth.register

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const setAuthChecked = (value: boolean): ISetAuthCheckedAction => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: TUser | null): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUser = () => {
  return (dispatch: AppDispatch) => {
    return auth.getUser().then((res) => {
      dispatch(setUser(res.user));
    });
  };
};

export const userRelated = (func: TFunc, form: TForm) => {
  return (dispatch: AppDispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    });
    return func(form).then((res: any) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    })
    .catch((error: string) => {
        dispatch({
          type: GET_USER_FAILED
      });
      myAlert(error)
    });;
  };
};

export const login = (form: TForm) => {
  return userRelated(auth.login, form)
    
}

export const register = (form: TForm) => {
  return userRelated(auth.register, form)
}

export const patchUser = (form: TForm) => {
  return (dispatch: AppDispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    });
    return auth.patchUser(form).then((res) => {
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    })
    .catch((error) => {
        dispatch({
          type: GET_USER_FAILED
      });
      myAlert(error)
    });
  };
};

export const checkUserAuth = () => {
    return (dispatch: AppDispatch<Promise<void>>) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
              .catch(() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  dispatch(setUser(null));
               })
              .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
        }
    };
};


export const logout = () => {
  return (dispatch: AppDispatch) => {
    return auth.logout().then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUser(null));
    })
    .catch((error) => {
      myAlert(error);
    });
  };
};
