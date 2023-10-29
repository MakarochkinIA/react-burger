import { FC } from 'react';
import styles from './profile-orders.module.css';
import FeedCard from '../../feed/feed-list/feed-card/feed-card';
import { useSelector } from '../../../hooks/redux-hooks';
import { wsData } from '../../../utils/data';
import { makeOrder } from '../../../utils/utils';

const ProfileOrders: FC = () => {
  const messages = useSelector((store) => store.wsAll.messages);
  const message = wsData
  const { indexedIngredients } = useSelector(
    (state) => state.ingredients
);
  return (
    <div className={`${styles.main_container}`}>
      <section className={`${styles.feed_list} custom-scroll`}>
        {indexedIngredients && message.orders.map((order, index) => (
          <FeedCard key={index} order={makeOrder(order, indexedIngredients)} />
        ))}
      </section>
    </div>
  );
}

export default ProfileOrders;