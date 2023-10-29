import {  FC } from 'react';
import styles from './feed-ingredients.module.css';
import data from '../../../../../utils/data';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FeedIngredientsProps } from '../../../../../utils/types';


const FeedIngredients: FC<FeedIngredientsProps> = ({ingredients}) => {
  const icons = ingredients.map((item) => (item.image_mobile))
  const length = icons.length
  const showIcons = 6

  const lastIcon = () => {
    if (length < showIcons) {
      return (
        <></>
      )
    } else if (length === showIcons) {
      return (
        <div  key={1} style={{zIndex: length - showIcons}} className={styles.image_container}>
            <img
            alt='Нет изображения'
            src={icons[showIcons - 1]}

          />
        </div>
      )
    } else {
      return (
      <div  key={1} style={{zIndex: length - showIcons}} className={styles.last_image_container}>
          
            <img

            alt='Нет изображения'
            src={icons[showIcons - 1]}

          />
          

          <div className={styles.overlay}></div>
          <div className={styles.centered}>
            {`+${length - showIcons}`}
          </div>
        </div>
      )
    }
  }
  return (
    <div className={styles.outer_ingredients}>
        <div className={styles.ingredients}>
            
              {icons.slice(0, showIcons - 1).map((item, index) => (
                <div style={{zIndex: length - index}} key={index} className={styles.image_container}>
                  <img
                  alt='Нет изображения'
                  src={item}
    
                />
                </div>
              ))}
              {lastIcon()}
              
            </div>
        </div>
  );
};

export default FeedIngredients;