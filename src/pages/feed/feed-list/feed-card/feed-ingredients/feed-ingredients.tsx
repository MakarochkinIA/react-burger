import {  FC } from 'react';
import styles from './feed-ingredients.module.css';
import data from '../../../../../utils/data';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FeedIngredientsProps } from '../../../../../utils/types';


const FeedIngredients: FC<FeedIngredientsProps> = ({ingredients}) => {
  const icons = ingredients.map((item) => (item.image_mobile))
  const length = icons.length
  return (
    <div className={styles.outer_ingredients}>
        <div className={styles.ingredients}>
            
              {icons.map((item, index) => (
                <div style={{zIndex: length - index}} key={index} className={styles.image_container}>
                  <img
                  alt='Нет изображения'
                  src={item}
    
                />
                </div>
              ))}
            
            </div>
        </div>
  );
};

export default FeedIngredients;