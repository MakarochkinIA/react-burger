import { NORMA_API } from "./constants";
import { Ingredient } from "./types";


const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const checkSuccess = (res: any) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res.status}`);
};

export const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${NORMA_API}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const getIngredientsRequest = () => request("ingredients");


export const refreshToken = () => {
  return fetch(`${NORMA_API}auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

  export const fetchWithRefresh = async (url: string, options: RequestInit) => {
    try {
      const res = await fetch(`${NORMA_API}${url}`, options);
      return await checkResponse(res);
    } catch (err: any) {

      if (err.message === "jwt expired") {
        const refreshData = await refreshToken();
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
  
        const updatedOptions: RequestInit = { ...options };
        
        if (updatedOptions.headers) {
          updatedOptions.headers = {
            ...updatedOptions.headers,
            authorization: refreshData.accessToken
          };
        }
  
        const res = await fetch(`${NORMA_API}${url}`, updatedOptions);
        return await checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  };

export const userRelated = async (url: string, form: { [key: string]: string } ) => {
    return await request(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(form)
    })
};

export function getOrderRequest(props: string[]) {
  
  return fetchWithRefresh(`orders/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify({ ingredients: props }),
  });
}


export const getOrderByNumberRequest = async (props: string) => {
  
  return await request(`orders/${props}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}