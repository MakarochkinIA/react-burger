import { useState, useEffect, FC } from 'react';
import { useSelector } from '../../../hooks/redux-hooks';
import { useLocation } from 'react-router-dom';
import styles from './feed-details.module.css';
import { FullOrder } from '../../../utils/types';
import IngredientList from './ingredient-list/ingredient-list';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { orderForDetails } from '../../../utils/utils';
import { STATUSES } from '../../../utils/constants';
import { useCallback } from 'react';

const FeedDetails: FC = () => {

  const location = useLocation();
  const { indexedIngredients } = useSelector(
      (state) => state.ingredients
  );
  const { order: stateOrder } = useSelector(
    (state) => state.currentOrder
  );
  const number = location.pathname.split('/')[location.pathname.split('/').length - 1]
  const [currentOrder, setOrder] = useState<FullOrder | undefined>(stateOrder);
  const notModal = !(location.state && location.state.background)
  async function fetchData() {
    const result = indexedIngredients ? (await orderForDetails(number, indexedIngredients) ): undefined
    setOrder(result);
}
  useEffect(() => {
    fetchData()
  }, [number]);

 
  
  return (
    <>
      {currentOrder && (
        <>
          {notModal ? (
            <div className={styles.head}>
              <span className={`text text_type_digits-default`}>
                {`#${currentOrder.number}`}
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className= {notModal ? styles.order_details : styles.order_details_modal}>
            <span className='mb-3 text text_type_main-medium'>
            {`${currentOrder.name}`}
            </span>

              <span className='mb-15 text text_type_main-default'>
                {STATUSES[currentOrder.status]}
              </span>

            <div className='mb-10'>
                <IngredientList ingredients={currentOrder.ingredients} />
            </div>
            <div className={styles.bottom}>
            <FormattedDate date={new Date(currentOrder.createdAt)} className={'text text_type_main-default text_color_inactive'} />
            <div className={`${styles.price}  text text_type_digits-default`}>
                <div className={styles.cost}>
                {`${currentOrder.cost}`}
                </div>
                <CurrencyIcon type='primary' />
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeedDetails;