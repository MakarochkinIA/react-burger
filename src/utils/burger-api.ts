import { NORMA_API } from "./constants";


export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredientsRequest() {
    return fetch(`${NORMA_API}/ingredients/`)
        .then(checkResponse)
        .catch((error) => {
          alert(error.message);
      });
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

  export const fetchWithRefresh = async (url: string, options: RequestInit) => {
    try {
      const res = await fetch(url, options);
      return await checkResponse(res);
    } catch (err) {
      if (err instanceof Error && err.message === "jwt expired") {
        const refreshData = await refreshToken();
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
  
        // Копируем объект options, чтобы избежать изменений оригинала
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
    }).then(checkResponse)
      .catch((error) => {
        alert(error.message);
    });
};

export function getOrderRequest(props: string) {
  return fetchWithRefresh(`${NORMA_API}/orders/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify({ ingredients: props }),
  });
}