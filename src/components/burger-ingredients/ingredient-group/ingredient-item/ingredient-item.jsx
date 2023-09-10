import styles from './ingredient-item.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from "react-dnd";


const IngredientItem = ({ item, showDetail }) => {
    
    const {_id, content} = item
    const [{isDrag}, dragRef] = useDrag({
        type: "animal",
        item: {_id},
    });
    function countOccurrences(arr, obj) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === obj) {
            count++;
          }
        }
        return count;
      }

    const data = useSelector(
        state => state.constructorIngredients
    )
    const getCounter = (data, obj) => {
        return obj.type === 'bun' ? (obj === data.bun ? 1 : 0) : countOccurrences(data.ingredients, obj)
    }
    const countContent = 
    (item) => {
        const count = getCounter(data, item);
        return count > 0 && (<Counter count={count} size="default" extraClass="m-1" />)
    }
    return (
        <div ref={dragRef} key={item._id} className={styles.card_item} onClick={() => { showDetail(item) }}>
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

export default IngredientItem