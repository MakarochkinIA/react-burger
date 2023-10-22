import {  FC } from 'react';
import styles from './feed-card.module.css';
import data from '../../../../utils/data';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import FeedIngredients from './feed-ingredients/feed-ingredients';



const FeedCard: FC = () => {
    const today = new Date()
    const yesterday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
      today.getHours(),
      today.getMinutes() - 1,
      0,
    )
  return (
      <div className={styles.card}>
        <div className={`${styles.meta} mt-6 mb-6 ml-6 mr-6`}>
          <span className={'text text_type_digits-default'}>
            #1234567
          </span>
          <FormattedDate date={yesterday} className={'text text_type_main-default text_color_inactive'} />
        </div >
        <p className={`${styles.name} text text_type_main-medium mb-6 ml-6 mr-6`}>
          Test name of the burger
        </p>

        <FeedIngredients />

        </div>

  );
};

export default FeedCard;