import { userRelated } from './burger-api'
import { request } from './burger-api'
import { LOGIN, REGISTER } from './constants';
import { fetchWithRefresh } from './burger-api';

const getUser = async () =>
  await fetchWithRefresh(`auth/user`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || ''
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });

const patchUser = async (form: { [key: string]: string }) =>
  await fetchWithRefresh(`auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || ''
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  });

const login = async (form: { [key: string]: string }) => {
    return userRelated(LOGIN, form)
};

const register = async (form: { [key: string]: string }) => {
  return userRelated(REGISTER, form)
};

const logout = async () => {
    return await request(`auth/logout`, {
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
    });
  };

export const auth = {
  getUser,
  login,
  logout,
  register,
  patchUser
};
