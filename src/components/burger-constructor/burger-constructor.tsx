import { useState, useCallback, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from './order-details/order-details';
import ConstructorItem from './constructor-item/constructor-item';
import Modal from '../modal/modal';
import { getOrder } from '../../services/actions/order';
import { ADD_INGREDIENT } from '../../services/actions/current-ingredients';
import { v4 as uuid } from 'uuid';
import OrderStub from './order-details/order-stub/order-stub';
import { Ingredient } from '../../utils/types';

const BurgerConstructor: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [detailsVisible, setVisible] = useState(false);
    //@ts-ignore
    const { bun, ingredients } = useSelector((state) => state.constructorIngredients);
    //@ts-ignore
    const { user, isAuthChecked } = useSelector((state) => state.user);
    //@ts-ignore
    const { orderRequest, orderFailed, order } = useSelector((state) => state.order);

    const getIds = (bun: Ingredient, ingredients: Ingredient[]) => {
        const ids = ingredients.map((item) => item._id);
        return [...ids, bun._id];
    };

    const getTotalCost = useCallback(
        (bun: Ingredient, ingredients: Ingredient[]) => {
            //@ts-ignore
            const sum = ingredients.reduce((totalCost: number, currentItem) => {
                return totalCost + currentItem.price;
            }, 0);
            const totalCost = Object.keys(bun).length > 0 ? sum + 2 * bun.price : sum;
            return isNaN(totalCost) ? 0 : totalCost;
        },
        [bun, ingredients]
    );

    const makeOrder = () => {
        if (user && isAuthChecked) {
            if (bun._id) {
                //@ts-ignore
                dispatch(getOrder(getIds(bun, ingredients)));
                setVisible(true);
            } else {
                alert('Выберите булку')
            }
        } else {
            navigate('/login');
        }
    };

    const closeDetails = () => {
        setVisible(false);
    };

    const handleDrop = (item: Ingredient) => {
        dispatch({
            type: ADD_INGREDIENT,
            ingredient: { ...item, key: uuid() },
        });
    };

    return (
        <div className={styles.burger_constructor}>
            <div className={styles.constructor_area}>
                <ConstructorItem onDropHandler={handleDrop} />
            </div>
            <div className={`${styles.info} mr-8`}>
                <p className={`${styles.price} text text_type_digits-medium`}>
                    {getTotalCost(bun, ingredients)}
                    <CurrencyIcon type='primary' />
                </p>
                <Button onClick={makeOrder} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
            {detailsVisible && orderRequest && (
                <Modal onClose={closeDetails}>
                    <OrderStub />
                </Modal>
            )}
            {detailsVisible && !orderRequest && !orderFailed && order.number && (
                <Modal onClose={closeDetails}>
                    <OrderDetails />
                </Modal>
            )}
        </div>
    );
};

export default BurgerConstructor;