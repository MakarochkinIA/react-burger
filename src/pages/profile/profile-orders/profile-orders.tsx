import { useEffect, FC } from 'react';
import styles from './profile-orders.module.css';
import FeedCard from '../../feed/feed-list/feed-card/feed-card';
import { useSelector } from '../../../hooks/redux-hooks';
import { makeOrder } from '../../../utils/utils';
import { WS_CONNECTION_START } from '../../../services/actions/ws';
import { useDispatch } from '../../../hooks/redux-hooks';

const ProfileOrders: FC = () => {
    const messages = useSelector((store) => store.ws.messages);
    const dispatch = useDispatch();
    const { indexedIngredients } = useSelector(
        (state) => state.ingredients
    );
    useEffect(
        () => {
            dispatch({ type: WS_CONNECTION_START });
        },
        [dispatch] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return (
        
        <div className={`${styles.main_container}`}>
            {messages && (<section className={`${styles.feed_list} custom-scroll`}>
                {indexedIngredients && messages.orders.map((order, index) => (
                    <FeedCard key={index} order={makeOrder(order, indexedIngredients)} />
                ))}
            </section>)}
            
        </div>
    );
}

export default ProfileOrders;