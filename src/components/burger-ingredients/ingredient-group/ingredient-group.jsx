import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { IngredientPropTypes } from '../../../utils/types'
import styles from './ingredient-group.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


const IngredientGroup = ({ name, ingredients, showDetail }) => {
    let count = null
    const data = useSelector(
        state => state.constructorIngredients
    )
    function countOccurrences(arr, obj) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === obj) {
            count++;
          }
        }
        return count;
      }

    const getCounter = (data, obj) => {
        return obj.type === 'bun' ? (obj === data.bun ? 1 : 0) : countOccurrences(data.ingredients, obj)

    }
    return (
        <>
            <p className='text text_type_main-medium'>
                {name}
            </p>
            <section className={styles.card}>
                {ingredients.map((item) => (
                    
                    <div key={item._id} className={styles.card_item} onClick={() => {showDetail(item)}}>
                        {getCounter(data, item) > 0 && (<Counter count={getCounter(data, item)} size="default" extraClass="m-1" />)}
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
                ))}
            </section>
        </>
    );
}
IngredientGroup.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
    showDetail: PropTypes.func.isRequired
}
export default IngredientGroup;