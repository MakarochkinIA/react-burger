import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../utils/types'
import styles from './ingredient-group.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientGroup = ({ name, ingredients }) => {
    return (
        <>
            <p className='text text_type_main-medium'>
                {name}
            </p>
            <section className={styles.card}>
                {ingredients.map((item) => (
                    <div key={item._id} className={styles.card_item}>
                        <Counter count={1} size="default" extraClass="m-1" />
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
}
export default IngredientGroup;