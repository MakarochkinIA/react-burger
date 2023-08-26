import React from 'react';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientGroup from './ingredient-group/ingredient-group';

const BurgerIngredients = ({ ingredients }) => {
    const buns = ingredients.filter(item => item.type === 'bun')
    const sauce = ingredients.filter(item => item.type === 'sauce')
    const main = ingredients.filter(item => item.type === 'main')

    const [current, setCurrent] = React.useState('buns')
    const bunsRef = React.useRef(null)
    const sauceRef = React.useRef(null)
    const mainRef = React.useRef(null)

    const setTab = (tab) => {
        setCurrent(tab);
        switch (tab) {
            case 'buns':
                bunsRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case 'sauce':
                sauceRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case 'main':
                mainRef.current.scrollIntoView({ behavior: "smooth" });
                break;
        }
    };
    return (
        <div className={styles.burger_ingredients}>
            <p className='text text_type_main-large pt-10 mb-5'>
                Соберите бургер
            </p>
            <div className={`${styles.tab} mb-10`}>
                <Tab value="buns" active={current === 'buns'} onClick={setTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setTab}>
                    Начинки
                </Tab>
            </div>
            <ul className={`${styles.group_list} custom-scroll`}>
                <li ref={bunsRef}>
                    <IngredientGroup
                        name='Булки'
                        ingredients={buns}
                    />
                </li>
                <li ref={sauceRef}>
                    <IngredientGroup
                        name='Соусы'
                        ingredients={sauce}
                    />
                </li>
                <li ref={mainRef}>
                    <IngredientGroup
                        name='Начинка'
                        ingredients={main}
                    />
                </li>
            </ul>
        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;