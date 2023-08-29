import { NORMA_API } from "./constants";


const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};


export function getIngredients() {
    return fetch(`${NORMA_API}/ingredients/`)
        .then(checkReponse)
}