import { useState, useRef } from 'react';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientGroup from './ingredient-group/ingredient-group';
import IngredientDetails from './ingredient-details/ingredient-details';
import Modal from '../modal/modal';


const BurgerIngredients = ({ ingredients }) => {
    const buns = ingredients.filter(item => item.type === 'bun')
    const sauce = ingredients.filter(item => item.type === 'sauce')
    const main = ingredients.filter(item => item.type === 'main')

    const [current, setCurrent] = useState('buns')
    const [detailsVisible, setVisible] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)

    const bunsRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)

    const showDetails = (item) => {
        setVisible(true);
        setCurrentItem(item)
    }

    const closeDetails = () => {
        setVisible(false);
    }

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
            default:
                bunsRef.current.scrollIntoView({ behavior: "smooth" });
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
                        showDetail={showDetails}
                    />
                </li>
                <li ref={sauceRef}>
                    <IngredientGroup
                        name='Соусы'
                        ingredients={sauce}
                        showDetail={showDetails}
                    />
                </li>
                <li ref={mainRef}>
                    <IngredientGroup
                        name='Начинка'
                        ingredients={main}
                        showDetail={showDetails}
                    />
                </li>
            </ul>
            {detailsVisible &&
                <Modal header='Детали ингредиента' onClose={closeDetails}>
                    <IngredientDetails ingredient={currentItem}/>
                </Modal>}
        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;