import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/types'
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientGroup from './ingredient-group/ingredient-group';
import IngredientDetails from './ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { v4 as uuid } from 'uuid';
import {getIngredients} from '../../services/actions/burger-ingredients'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
    ADD_INGREDIENT,
  } from '../../services/actions/current-ingredients';
  import {
    ADD_CURRENT_INGREDIENT,
    DELETE_CURRENT_INGREDIENT
  } from '../../services/actions/ingredient';



const BurgerIngredients = () => {
    const dispatch = useDispatch();
    const { ingredientsRequest, ingredientsFailed, ingredients} = useSelector(
      state => state.ingredients
    );
    const [isElementDragging, setElementDrag] = useState(false);
    const [distance, setDistance] = useState({});
    const [elementPosition, setElementPosition] = useState({});
 
    useEffect(
      () => {
        dispatch(getIngredients());
      },
      [dispatch]
    );
    const tabRef = useRef(null)
    const bunsRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)

    function getMinValue(data) {
        let minAttributeName = null;
        let minValue = Infinity;
        for (const key in data) {
            if (data[key] < minValue) {
                minValue = data[key];
                minAttributeName = key;
            }
        }
        return minAttributeName

    }

    const handleScroll = () => {
    
        setDistance({
            ...distance,
            buns: Math.abs(tabRef.current.getBoundingClientRect().bottom - bunsRef.current.getBoundingClientRect().top),
            sauce: Math.abs(tabRef.current.getBoundingClientRect().bottom - sauceRef.current.getBoundingClientRect().top),
            main: Math.abs(tabRef.current.getBoundingClientRect().bottom - mainRef.current.getBoundingClientRect().top)
        });
        setCurrent(getMinValue(distance))
    };

    const buns = ingredients.filter(item => item.type === 'bun')
    const sauce = ingredients.filter(item => item.type === 'sauce')
    const main = ingredients.filter(item => item.type === 'main')

    const [current, setCurrent] = useState('buns')
    const [detailsVisible, setVisible] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)



    const showDetails = (item) => {
        dispatch({
            type: ADD_INGREDIENT,
            ingredient: {...item, key: uuid()}
        });
        setVisible(true)
        dispatch({
            type: ADD_CURRENT_INGREDIENT,
            ingredient: item
        });
    }

    const closeDetails = () => {
        dispatch({
            type: DELETE_CURRENT_INGREDIENT,
        });
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
        <>
 
        {ingredientsRequest && (<p className={styles.pre_show}>Идет загрузка</p>)}
        {ingredientsFailed && (<p className={styles.pre_show}>Не удалось загрузить данные</p>)}
        {!ingredientsRequest && !ingredientsFailed && ingredients.length && 
        (<div className={styles.burger_ingredients}>
            <p className='text text_type_main-large pt-10 mb-5'>
                Соберите бургер
            </p>
            <div ref={tabRef} className={`${styles.tab} mb-10`}>
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
 
            <ul className={`${styles.group_list} custom-scroll`} onScroll={handleScroll}>
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
                    <IngredientDetails/>
                </Modal>}
        </div>)}
        </>
    );
}

export default BurgerIngredients;