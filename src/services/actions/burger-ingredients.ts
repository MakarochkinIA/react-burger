import { getIngredientsRequest } from '../../utils/burger-api';
import { AppDispatch } from '../../utils/types';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredients() {
  return function(dispatch: AppDispatch) {
    dispatch({
        type: GET_INGREDIENTS_REQUEST
      });
      getIngredientsRequest().then(res => {

          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: res.data
          });
      })
      .catch((error) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        });
        alert(error.message);
      });
    };
  }
