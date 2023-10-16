import { CSSProperties, ReactNode } from 'react'

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

export interface ConstructorElementEmptyProps {
    type?: '' | 'top' | 'bottom';
    text: string;
    extraClass?: CSSProperties;
  }

export interface MainElementsProps {
    index: number;
    item: Ingredient;
    handleClose: (item: Ingredient) => void;
}

export interface DragItem {
    index: number;
    id: string;
    type: string;
}

export interface IngredientItemProps {
    item: Ingredient;
  }
  
export interface IngredientGroupProps {
    name: string;
    ingredients: Ingredient[];
  }

export interface ModalOverlayProps {
    onClose: () => void;
  }

export interface ModalProps {
   children: ReactNode;
   header?: string;
   onClose: () => void;
 }

export interface ProtectedProps {
    onlyUnAuth?: boolean;
    component: ReactNode;
  }