export interface Ingredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  }
  
export interface BunIngredient {
    bun: Ingredient;
    ingredients: Ingredient[];
  }


export type TForm = {
    password: string;
    name: string;
    email: string;
}