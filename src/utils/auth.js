import { userRelated } from './burger-api'
import { checkResponse } from './burger-api'
import { LOGIN, REGISTER, NORMA_API } from './constants';
import { fetchWithRefresh } from './burger-api';

const getUser = async () =>
  await fetchWithRefresh(`${NORMA_API}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken')
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });

const patchUser = async (form) =>
await fetchWithRefresh(`${NORMA_API}/auth/user`, {
  method: 'PATCH',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('accessToken')
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: JSON.stringify(form)
});

const login = async form => {
    return userRelated(LOGIN, form)
};

const register = async form => {
  return userRelated(REGISTER, form)
};

const logout = async () => {
    return await fetch(`${NORMA_API}/auth/logout`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      })
    }).then(checkResponse);
  };

export const auth = {
  getUser,
  login,
  logout,
  register,
  patchUser
};
