import { FC } from 'react';
import styles from './feed.module.css';
import FeedList from './feed-list/feed-list';
import FeedData from './feed-data/feed-data';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../hooks/redux-hooks';
import { WS_CONNECTION_START } from '../../services/actions/ws';


const Feed: FC = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
        dispatch({ type: WS_CONNECTION_START });
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );
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