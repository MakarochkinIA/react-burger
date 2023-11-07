export const NORMA_API = 'https://norma.nomoreparties.space/api/'
export const wsAllUrl = 'wss://norma.nomoreparties.space/orders/all';
export const wsUrl = 'wss://norma.nomoreparties.space/orders';
export const LOGIN = 'auth/login'
export const REGISTER = 'auth/register'
export const FORGOT_PASSWORD = 'password-reset'
export const RESET_PASSWORD = 'password-reset/reset'

export const STATUSES: {[key: string]: string} = {
    'done': 'Выполнен',
    'created': 'Создан',
    'pending': 'Готовится',
    'canceled': 'Отменен'
  }