import { NORMA_API } from "./constants";


export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
function addHeaders(props) {
    return {
      ...props,
    };
  }

export function getIngredientsRequest() {
    return fetch(`${NORMA_API}/ingredients/`)
        .then(checkResponse)
}


export const refreshToken = () => {
    return fetch(`${NORMA_API}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    }).then(checkResponse);
  };

  export const fetchWithRefresh = async (url, options) => {
    try {
      const res = await fetch(url, options);
      return await checkResponse(res);
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //повторяем запрос
        return await checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  };

export const userRelated = async (url, form) => {
    return await fetch(`${NORMA_API}/${url}`, {
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
    }).then(checkResponse);
};

export function getOrderRequest(props) {
  return fetchWithRefresh(`${NORMA_API}/orders/`, {
      method: "POST",
      headers: addHeaders({ "Content-Type": "application/json" }),
      body: `{"ingredients": ${props}}`,
  });
}