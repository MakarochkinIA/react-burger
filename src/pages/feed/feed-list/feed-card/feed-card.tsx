import { FC } from 'react';
import styles from './feed-card.module.css';
import { useDispatch, useSelector } from '../../../../hooks/redux-hooks';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import FeedIngredients from './feed-ingredients/feed-ingredients';
import { FeedCardProps, FullOrder } from '../../../../utils/types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { ADD_CURRENT_ORDER } from '../../../../services/actions/current-order';
import { STATUSES } from '../../../../utils/constants';


const FeedCard: FC<FeedCardProps> = ( {order} ) => {
    const dispatch = useDispatch()
    const location = useLocation();
    if (order) {
        const createdAt = new Date(order.createdAt);
        const showDetail = (currenOrder: FullOrder) => {
            dispatch({
              type: ADD_CURRENT_ORDER,
              payload: currenOrder
            });
        }
        const path = location.pathname.split('/')[location.pathname.split('/').length - 1]
        const inFeed = path === 'feed'
        const to = path === 'feed' ? `/feed/${order.number}` : `/profile/orders/${order.number}`
    
        return (
            <Link
            key={order.number}
            to={to}
            state={{ background: location }}
            className={styles.link}
          >
            <div className={styles.card} onClick={() => { showDetail(order) }}>
                <div className={`${styles.meta}`}>
                    <span className={'text text_type_digits-default'}>
                        {`#${order.number}`}
                    </span>
                    <FormattedDate date={createdAt} className={'text text_type_main-default text_color_inactive'} />
                </div >
                <p style={{marginBottom: inFeed ? '24px' : '8px'}} className={`${styles.name} text text_type_main-medium ml-6 mr-6`}>
                    {`${order.name}`}
                </p>
                { inFeed ? <></> : (
                    <span className={'text text_type_main-default mb-6 ml-6 mr-6'}>
                        {STATUSES[order.status]}
                    </span>
                )}
                <div className={styles.icons}>
                    <FeedIngredients ingredients={order.ingredients} />
                
                <div className={`${styles.price}  text text_type_digits-default mr-6`}>
                    <div className={styles.cost}>
                    {`${order.cost}`}
                    </div>
                    <CurrencyIcon type='primary' />
                </div>
                </div>
            </div>
            </Link>
        );
    } else {
        return <></>
    };
    
    }

export default FeedCard;