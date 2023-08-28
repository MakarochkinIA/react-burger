import React from 'react'
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from './order-details/order-details';
import ConstructorItem from './constructor-item/constructor-item';
import Modal from '../modal/modal';


const BurgerConstructor = ({ ingredients }) => {

    const [detailsVisible, setVisible] = React.useState(false)

    const showDetails = () => {
        setVisible(true);
    }
    const closeDetails = () => {
        setVisible(false);
    }
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
                <Button onClick={showDetails} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>

            </div>
            {detailsVisible &&
                <Modal onClose={closeDetails}>
                    <OrderDetails />
                </Modal>}
        </div>
    );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
}

export default BurgerConstructor;