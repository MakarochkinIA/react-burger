import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from './order-details/order-details';
import ConstructorItem from './constructor-item/constructor-item';
import Modal from '../modal/modal';
import { getOrder } from '../../services/actions/order'


const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const [detailsVisible, setVisible] = useState(false)
    const { bun, ingredients } = useSelector(
        state => state.constructorIngredients
    )

    const getIds = (bun, ingredients) => {
        const ids = ingredients.map((item) => (
            item._id
        ))
        console.log(JSON.stringify([...ids, bun._id]));
        return JSON.stringify([...ids, bun._id])
    }
    function getTotalCost(bun, ingredients) {
        const sum = ingredients.reduce((totalCost, currentItem) => {
            return totalCost + currentItem.price;
          }, 0);
        const totalCost = sum + (2 * bun.price)
        console.log(totalCost);
        return isNaN(totalCost) ? 0 : totalCost
    }


    const showDetails = () => {
        dispatch(getOrder(getIds(bun, ingredients)));
        setVisible(true);
    }
    const closeDetails = () => {
        setVisible(false);
    }
    return (
        <div className={styles.burger_constructor}>
            <div className={styles.constructor_area}>
                <ConstructorItem/>

            </div>
            <div className={`${styles.info} mr-8`}>
                <p className={`${styles.price} text text_type_digits-medium`}>
                    {getTotalCost(bun, ingredients)}
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

export default BurgerConstructor;