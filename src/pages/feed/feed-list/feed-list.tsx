import { FC } from 'react';
import styles from './feed-list.module.css';
import FeedCard from './feed-card/feed-card';


const FeedList: FC = () => {
  return (
    <div className={styles.main_container}>
      <p className={`${styles.head} text text_type_main-large`}>
        Лента заказов
      </p>
      <section>
        <FeedCard />
        <FeedCard />
      </section>
    </div>
  );
}

export default FeedList;