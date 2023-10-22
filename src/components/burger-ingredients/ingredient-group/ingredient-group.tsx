import React from 'react';
import styles from './ingredient-group.module.css';
import IngredientItem from './ingredient-item/ingredient-item';
import { IngredientGroupProps } from '../../../utils/types';


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