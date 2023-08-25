import React from 'react';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientGroup from './ingredient-group/ingredient-group';

const BurgerIngredients = ({ingredients}) => {
    const buns = ingredients.filter(item => item.type === 'bun')
    const sauce = ingredients.filter(item => item.type === 'sauce')
    const main = ingredients.filter(item => item.type === 'main')

    const [current, setCurrent] = React.useState('one')
    return (
        <div className={styles.burger_ingredients}>
            <p className='text text_type_main-large pt-10 mb-5'>
                Соберите бургер
            </p>
            <div className='mb-10' style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <ul className={`${styles.group_list} custom-scroll`}>
                <li >
                    <IngredientGroup 
                        name='Булки'
                        ingredients={buns}
                    />
                </li>
                <li>
                    <IngredientGroup 
                        name='Соусы'
                        ingredients={sauce}
                    />
                </li>
                <li>
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