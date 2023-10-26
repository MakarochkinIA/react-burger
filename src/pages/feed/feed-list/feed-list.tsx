import { FC } from 'react';
import styles from './feed-list.module.css';
import FeedCard from './feed-card/feed-card';
import { useSelector } from '../../../hooks/redux-hooks';


const FeedList: FC = () => {
  const messages = useSelector((store) => store.wsAll.messages);
  return (
    <div className={`${styles.main_container} custom-scroll`}>
      <section className={`${styles.feed_list} custom-scroll`}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </section>
    </div>
  );
}

export default FeedList;