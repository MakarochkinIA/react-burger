import { FC } from 'react';
import styles from './ingredient-list.module.css';
import data from '../../../../utils/data';
import { Ingredient } from '../../../../utils/types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientListProps } from '../../../../utils/types';

const IngredientList: FC<IngredientListProps> = ( { ingredients } ) => {
    const ingredientItem = ( ingredient: Ingredient & {quantity: number}, index: number ) => {
        console.log('test');
        
        return (
            <div key={index} className={`${styles.card}`}>
                <div className={styles.text}>
            <div className={styles.image_container}>
                <img
                    alt='Нет изображения'
                    src={ingredient.image_mobile}
                />
            </div>
            <div className={styles.text}>
                <span>
                    {ingredient.name}
                </span>
                </div>
                </div>
                <div className={styles.price}>
                <span className={`mr-1 ml-4`}>
                {`${ingredient.quantity} x ${ingredient.price}`}
                </span>
                <CurrencyIcon type='primary' />
            </div>
            </div>
        )
    }

  return (
    <>
      <p className='text text_type_main-medium mb-6'>
        Состав:
      </p>
      <section className={`${styles.section} custom-scroll`}>
        {ingredients.map((item, index) => (
            ingredientItem(item, index)
        ))}
      </section>
    </>
  );
}

export default IngredientList;