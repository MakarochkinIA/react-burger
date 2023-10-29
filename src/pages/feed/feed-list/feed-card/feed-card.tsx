import { FC } from 'react';
import styles from './feed-card.module.css';
import data from '../../../../utils/data';
import { useDispatch, useSelector } from '../../../../hooks/redux-hooks';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import FeedIngredients from './feed-ingredients/feed-ingredients';
import { getIngredientsById } from '../../../../utils/utils';
import { FeedCardProps } from '../../../../utils/types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';


const FeedCard: FC<FeedCardProps> = ( {order} ) => {
    const createdAt = new Date(order.createdAt);
    const location = useLocation();

    return (
        <Link
        key={order.number}
        to={`/feed/${order.number}`}
        state={{ background: location }}
        className={styles.link}
      >
        <div className={styles.card}>
            <div className={`${styles.meta} mt-6 mb-6 ml-6 mr-6`}>
                <span className={'text text_type_digits-default'}>
                    {`#${order.number}`}
                </span>
                <FormattedDate date={createdAt} className={'text text_type_main-default text_color_inactive'} />
            </div >
            <p className={`${styles.name} text text_type_main-medium mb-6 ml-6 mr-6`}>
                {`${order.name}`}
            </p>
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
};

export default FeedCard;