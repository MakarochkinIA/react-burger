import { Ingredient, BunIngredient } from "./types";

export const countOccurrences = (arr: Ingredient[], obj: Ingredient) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === obj._id) {
        count++;
      }
    }
    return count;
  }

export const getCounter = (data:  BunIngredient, obj: Ingredient) => {
    return obj.type === 'bun' ? (obj._id === data.bun._id ? 2 : 0) : countOccurrences(data.ingredients, obj)
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