import { FC } from 'react';
import styles from './feed.module.css';
import FeedList from './feed-list/feed-list';
import FeedData from './feed-data/feed-data';

const Feed: FC = () => {
    return (
        <div className={styles.main}>
        <p className={`${styles.head} text text_type_main-large`}>
          Лента заказов
        </p>
      <div className={styles.flex_container}>
        
        <section>
            <FeedList />
        </section>
        <section>
            <FeedData />
        </section>
      </div>
      </div>
    );
  }
  
  export default Feed;