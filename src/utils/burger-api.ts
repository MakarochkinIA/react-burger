import { NORMA_API } from "./constants";


const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res: { [key: string]: string }) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${NORMA_API}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const getIngredientsRequest = () => request("ingredients");


export const refreshToken = () => request("auth/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify({
    token: localStorage.getItem("refreshToken"),
  }),
})

  export const fetchWithRefresh = async (url: string, options: RequestInit) => {
    try {
      const res = await fetch(`${NORMA_API}${url}`, options);
      return await checkResponse(res);
    } catch (err: any) {

      if (err.message === "jwt expired") {
        const refreshData = await refreshToken();
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
  
        const updatedOptions: RequestInit = { ...options };
        
        if (updatedOptions.headers) {
          updatedOptions.headers = {
            ...updatedOptions.headers,
            authorization: refreshData.accessToken
          };
        }
  
        const res = await fetch(url, updatedOptions);
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

export function getOrderRequest(props: string) {
  
  return fetchWithRefresh(`orders/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify({ ingredients: props }),
  });
}