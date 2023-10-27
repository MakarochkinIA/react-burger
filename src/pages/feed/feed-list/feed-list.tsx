import { FC } from 'react';
import styles from './feed-list.module.css';
import FeedCard from './feed-card/feed-card';
import { useSelector } from '../../../hooks/redux-hooks';
import { wsData } from '../../../utils/data';
import { makeOrder } from '../../../utils/utils';

const FeedList: FC = () => {
  const messages = useSelector((store) => store.wsAll.messages);
  const message = wsData
  const { indexedIngredients } = useSelector(
    (state) => state.ingredients
);
  return (
    <div className={`${styles.main_container} custom-scroll`}>
      <section className={`${styles.feed_list} custom-scroll`}>
        {indexedIngredients && message.orders.map((order, index) => (
          <>
          <FeedCard key={index} order={makeOrder(order, indexedIngredients)} />
          </>
        ))}
      </section>
    </div>
  );
}

export default FeedList;