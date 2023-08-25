import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from './constructor-item/constructor-item';

const BurgerConstructor = ({ ingredients }) => {

    return (
        <div className={styles.burger_constructor}>
            <div className={styles.constructor_area}>
                <ConstructorItem ingredients={ingredients} />

            </div>
            <div className={`${styles.info} mr-8`}>
                <p className={`${styles.price} text text_type_digits-medium`}>
                    610
                    <CurrencyIcon type='primary' />
                </p>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>

            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
}

export default BurgerConstructor;