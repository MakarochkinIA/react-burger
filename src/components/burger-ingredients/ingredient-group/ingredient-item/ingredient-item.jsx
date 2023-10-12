import styles from './ingredient-item.module.css';
import {Link, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from "react-dnd";
import { getCounter } from '../../../../utils/utils';
import {useCallback} from 'react'
import { IngredientPropTypes } from '../../../../utils/types';
import { ADD_CURRENT_INGREDIENT } from '../../../../services/actions/ingredient';


const IngredientItem = ({ item }) => {
    const dispatch = useDispatch();
    const [, dragRef] = useDrag({
        type: item.type === 'bun' ? 'bun' : 'main',
        item: item,
    });
    const showDetail = (item) => {
        dispatch({
            type: ADD_CURRENT_INGREDIENT,
            ingredient: item
        });
    }
    const location = useLocation();
    const data = useSelector(
        state => state.constructorIngredients
    )

    const countContent = useCallback((item) => {
        const count = getCounter(data, item);
        return count > 0 && (<Counter count={count} size="default" extraClass="m-1" />)
    }, [data])

    return (
        <Link
            key={item._id}
            to={`/ingredients/${item._id}`}
            state={{ background: location }}
            className={styles.link}
        >
        <div ref={dragRef} className={styles.card_item} onClick={() => { showDetail(item) }}>
            {countContent(item)}
            <img
                alt='Нет изображения.'
                src={item.image}
                className='ml-4 mr-4'
            />
            <div className={styles.card_text}>
                <span className='text text_type_digits-default mt-1 mb-1 pr-2'>
                    {item.price}
                </span>
                <CurrencyIcon type='primary' />
            </div>
            <p className={`${styles.card_text} text text_type_main-default`}>
                {item.name}
            </p>

        </div>
        </Link>
    )
}

IngredientItem.propTypes = {
    item: IngredientPropTypes.isRequired,
}

export default IngredientItem