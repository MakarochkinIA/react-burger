import { Ingredient, WSMessage } from "./types";
import { TConstructorIngredientState } from '../services/reducers/current-ingredients'

export const countOccurrences = (arr: Ingredient[], obj: Ingredient) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id === obj._id) {
            count++;
        }
    }
    return count;
}

export const getCounter = (data: TConstructorIngredientState, obj: Ingredient) => {
    return obj.type === 'bun' ? (data.bun ? (obj._id === data.bun._id ? 2 : 0) : 0) : countOccurrences(data.ingredients, obj)
}

export const validateForm = (form: { [key: string]: string }): boolean => {
    for (let key in form) {
        const value = form[key];
        if (typeof value !== 'string' || value.trim() === '') {
            return false;
        }
    }
    return true;
}


export const myAlert = (error: string | { [key: string]: string }) => {
    typeof error === 'string' ?
        alert(error) : alert(error.message)
}

export const getOrderNumbersStatuses = (message: WSMessage) => {
    const numbersDone = []
    const numbersCooking = []
    for (const order of message.orders) {
        order.status === 'done' ? (
            numbersDone.push(order.number)
        ) : (
            numbersCooking.push(order.number)
        )
    }
    return {
        done: numbersDone,
        inWork: numbersCooking
    }
}


export const indexIngredients = (ingredients: Ingredient[]) => {
    const indexedIngredients: {[key: string]: Ingredient} = {}
    for (const ingredient of ingredients) {
        indexedIngredients[ingredient._id] = ingredient
    }
    return indexedIngredients
}


export const getIngredientsById = (items: string[], indexedIngredients: {[key: string]: Ingredient}) => {
    const ingredients = []
    for (const item of items) {
        ingredients.push(indexedIngredients[item])
    }
    return ingredients
}

export const getCost = (ingredients: Ingredient[]) => {
    let cost = 0
    for (const ingredient of ingredients) {
        cost += ingredient.price
    }
    return cost
}

export const addQuantity = (ingredients: Ingredient[]) => {
    const uniqueObjects: {[key: string]: Ingredient & {quantity: number}} = {}
    const result = []
    for (const ingredient of ingredients) {
        const key = JSON.stringify(ingredient)

        if (!uniqueObjects[key]) {
            uniqueObjects[key] = {
                ...ingredient,
                quantity: 1,
            }
        } else {
            uniqueObjects[key].quantity++
        }
    }

    for (const key in uniqueObjects) {
        result.push(uniqueObjects[key])
    }
    return result
}