import { FC } from 'react';
import styles from './ingredient-group.module.css';
import data from '../../../../utils/data';
import { Ingredient } from '../../../../utils/types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const IngredientList: FC = () => {
    const item = ( ingredient: Ingredient & {count: number} ) => {
        return (
            <div>
                <img
                    alt='Нет изображения'
                    src={ingredient.image_mobile}
                />
                <span>
                    {ingredient.name}
                </span>
                <span>
                    {ingredient.count} x {ingredient.price}
                </span>
                <CurrencyIcon type='primary' />
            </div>
        )
    }

  return (
    <>
      <p className='text text_type_main-medium'>

      </p>
      <section className={styles.card}>

      </section>
    </>
  );
}

export default IngredientList;