import {  FC } from 'react';
import styles from './feed-ingredients.module.css';
import data from '../../../../../utils/data';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';



const FeedIngredients: FC = () => {
  return (
    <div className={styles.ingredients}>
        <div className={styles.ingredients}>
            <div className={styles.image_container}>
            <img
              alt='Нет изображения'
              src={data[0].image_mobile}

            />
            
            </div>
            <div className={styles.image_container}>
            <img
              alt='Нет изображения'
              src={data[1].image_mobile}

            />
            
            </div>
            </div>
        </div>
  );
};

export default FeedIngredients;