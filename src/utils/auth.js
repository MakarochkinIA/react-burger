import { auth } from './burger-api'
import { LOGIN } from './constants';

const getUser = async () =>
  await fetch('https://cosmic.nomoreparties.space/api/user', {
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


const login = async form => {
    return auth(LOGIN, form)
};

const logout = async () => {
    return await fetch('https://cosmic.nomoreparties.space/logout', {
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
  logout
};
