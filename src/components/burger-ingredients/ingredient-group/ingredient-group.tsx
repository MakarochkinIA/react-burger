import React from 'react';
import { Ingredient } from '../../../utils/types';
import styles from './ingredient-group.module.css';
import IngredientItem from './ingredient-item/ingredient-item';

interface IngredientGroupProps {
  name: string;
  ingredients: Ingredient[];
}

const IngredientGroup: React.FC<IngredientGroupProps> = ({ name, ingredients }) => {
  return (
    <>
      <p className='text text_type_main-medium'>
        {name}
      </p>
      <section className={styles.card}>
        {ingredients.map((item) => (
          <IngredientItem item={item} key={item._id} />
        ))}
      </section>
    </>
  );
}

export default IngredientGroup;