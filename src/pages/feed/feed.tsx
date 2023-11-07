import { FC } from 'react';
import styles from './feed.module.css';
import FeedList from './feed-list/feed-list';
import FeedData from './feed-data/feed-data';
import { useEffect } from 'react';
import { useDispatch } from '../../hooks/redux-hooks';
import { 
  WS_ALL_CONNECTION_START,
  WS_ALL_CONNECTION_CLOSED
 } from '../../services/actions/ws-all';
import { Outlet, useLocation } from 'react-router-dom';
import { wsAllUrl } from '../../utils/constants';


const Feed: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(
    () => {
        dispatch({ 
          type: WS_ALL_CONNECTION_START,
          payload: wsAllUrl
         });
        // Закрытие сокета при размонтировании компонента.
        return () => {
          dispatch({ type: WS_ALL_CONNECTION_CLOSED })
        }
    },
    [dispatch]
    
  );
    return (
      <>
      {(location.pathname === '/feed') ? (
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
      ) : <Outlet />}
      </>
    );
  }
  
  export default Feed;