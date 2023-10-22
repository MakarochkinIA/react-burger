import {  FC } from 'react';
import styles from './feed-card.module.css';
import data from '../../../../utils/data';



const FeedCard: FC = () => {

  return (
      <div className={styles.card}>
        <div className={styles.meta}>
          <span className='text text_type_digits-default mt-6 mb-6 ml-6 mr-6'>
          test name
          </span>
        </div >
        <p className={`${styles.name} text text_type_main-default mb-6 ml-6 mr-6`}>
          test name
        </p>
        <div className={`${styles.image_container} text text_type_main-default mb-6 ml-6 mr-6`}>
        <img
              alt='Нет изображения'
              src={data[0].image_mobile}

            />
        </div>
      </div>
  );
};

export default FeedCard;