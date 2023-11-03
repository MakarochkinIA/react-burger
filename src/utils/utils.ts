import { Ingredient, Order, WSMessage } from "./types";
import { TConstructorIngredientState } from '../services/reducers/current-ingredients'
import { getOrderByNumberRequest } from "./burger-api";

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

export const getOrderNumbersStatuses = (message: WSMessage | undefined) => {
    const numbersDone: number[] = [];
    const numbersCooking: number[] = [];
    
    if (message) {
        for (const order of message.orders) {
            if (order.status === 'done') {
                numbersDone.push(order.number);
            } else {
                numbersCooking.push(order.number);
            }
        }
        return {
            done: numbersDone,
            inWork: numbersCooking
        };
    } else {
        return {
            done: numbersDone,
            inWork: numbersCooking
        };
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
    let isUndefind = false
    for (const item of items) {
        const itm = indexedIngredients[item]
        if (itm) {
            ingredients.push(indexedIngredients[item])
        } else {
            isUndefind = true
        }
        
    }
    if (isUndefind) {
        return undefined
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

export const makeOrder = (order: Order, indexedIngredients: {[key: string]: Ingredient}) => {
    const ingredients = getIngredientsById(order.ingredients, indexedIngredients)
    if (!ingredients) {
        return undefined
    }
    const cost = getCost(ingredients)
    const uniqueIngredients = addQuantity(ingredients)
    const newOrder = {...order, ingredients: uniqueIngredients, cost: cost}
    return newOrder

}

export const addQuantity = (ingredients: Ingredient[]) => {
    const uniqueObjects: {[key: string]: Ingredient & {quantity: number}} = {}
    const result: Array<Ingredient & {quantity: number}> = []
    let bun = undefined
    for (const ingredient of ingredients) {
        
        const key = ingredient._id
        if (ingredient.type === 'bun') {
            bun = ingredient
        }

        if (!uniqueObjects[key]) {
            uniqueObjects[key] = {
                ...ingredient,
                quantity: 1,
            }
        } else {
            uniqueObjects[key].quantity++
        }
    }
    if (bun) {
        delete uniqueObjects[bun._id]
        result.push({
            ...bun,
            quantity: 2,
        })
    }
    
    
    for (const key in uniqueObjects) {
        result.push(uniqueObjects[key])
    }
    return result
}

export const orderForDetails = async (number: string, indexedIngredients: {[key: string]: Ingredient}) => {
    const order = await getOrderByNumberRequest(number)
    return makeOrder(order.orders[0], indexedIngredients)
    
}