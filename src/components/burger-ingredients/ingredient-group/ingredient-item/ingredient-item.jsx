import styles from './ingredient-item.module.css';
import { useSelector } from 'react-redux';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from "react-dnd";
import { getCounter } from '../../../../utils/utils';
import {useCallback} from 'react'
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../../utils/types';


const IngredientItem = ({ item, showDetail }) => {
    
    const [, dragRef] = useDrag({
        type: item.type === 'bun' ? 'bun' : 'main',
        item: item,
    });


    const data = useSelector(
        state => state.constructorIngredients
    )

    const countContent = useCallback((item) => {
        const count = getCounter(data, item);
        return count > 0 && (<Counter count={count} size="default" extraClass="m-1" />)
    }, [data])

    return (
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
    )
}

IngredientItem.propTypes = {
    item: IngredientPropTypes.isRequired,
    showDetail: PropTypes.func.isRequired
}

export default IngredientItem