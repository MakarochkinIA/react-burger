import { FC } from 'react';
import styles from './feed-list.module.css';
import FeedCard from './feed-card/feed-card';


const FeedList: FC = () => {
  return (
    <div className={`${styles.main_container} custom-scroll`}>
      <section>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </section>
    </div>
  );
}

export default FeedList;