import { NORMA_API } from "./constants";


const checkResponse = (res) => {
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

export function getOrderRequest(props) {
    return fetch(`${NORMA_API}/orders/`, {
        method: "POST",
        headers: addHeaders({ "Content-Type": "application/json" }),
        body: `{"ingredients": ${props}}`,
    }).then(checkResponse);
}
