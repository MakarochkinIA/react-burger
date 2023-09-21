import { auth } from "../utils/auth";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUser = () => {
  return (dispatch) => {
    return auth.getUser().then((res) => {
      dispatch(setUser(res.user));
    });
  };
};

export const login = (form) => {
  return (dispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    });
    return auth.login(form).then((res) => {
        if (res && res.success) {
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(setUser(res.user));
            dispatch(setAuthChecked(true));
        } else {
            dispatch({
                type: GET_USER_FAILED
            });
        }
    });
  };
};

export const checkUserAuth = () => {
    return (dispatch) => {
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
  return (dispatch) => {
    return api.logout().then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUser(null));
    });
  };
};
