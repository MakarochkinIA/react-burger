import styles from './contructor-item.module.css';

import {  useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../utils/types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrop, useDrag } from 'react-dnd'
import { ConstructorElementEmpty } from '../constructor-element-empty/constructor-element-empty'
import {
    DELETE_INGREDIENT,
    MOVE_INGREDIENT
} from '../../../services/actions/current-ingredients';
import MainElements from './main-elements/main-elements';


const ConstructorItem = ({ onDropHandler }) => {
    const ref = useRef(null)
    const dispatch = useDispatch();
    const { bun, ingredients } = useSelector(
        state => state.constructorIngredients
    );
    const handleClose = (item) => {
        dispatch({
            type: DELETE_INGREDIENT,
            ingredient: item
        });
    }
    const [{ isHoverTopBun }, dropTopBun] = useDrop({
        accept: "bun",
        drop(item) {
            onDropHandler(item);
        },
        collect: monitor => ({
            isHoverTopBun: monitor.isOver(),
        })
    });
    const [{ isHoverBottomBun }, dropBottomBun] = useDrop({
        accept: "bun",
        drop(item) {
            onDropHandler(item);
        },
        collect: monitor => ({
            isHoverBottomBun: monitor.isOver(),
        })
    });
    const [{ isHoverMain }, dropMain] = useDrop({
        accept: "main",
        drop(item) {
            onDropHandler(item);
        },
        collect: monitor => ({
            isHoverMain: monitor.isOver(),
        })
    });
    const borderClr = ((isHover) => {
        return {borderColor: isHover ? 'blue' : 'transparent'}
    })

    const buns = useCallback((type) => {
        const {adds, dropRef, isHover} = type === 'top' ? {
            adds: '(верх)', dropRef: dropTopBun, isHover: isHoverTopBun
        } : {adds: '(низ)', dropRef: dropBottomBun, isHover: isHoverBottomBun}
        return Object.keys(bun).length !== 0 ? (
            <div className={styles.buns} ref={dropRef}>
                <ConstructorElement
                    type={type}
                    isLocked={true}
                    text={`${bun.name} ${adds}`}
                    price={bun.price}
                    thumbnail={bun.image}
                    extraClass={`${styles.bg_color}`}
                />
            </div>
        ) : (
            <div className={styles.buns}  ref={dropRef}>
                <ConstructorElementEmpty text='Выберите булку' type={type} extraClass={borderClr(isHover)} />
            </div>
        )
    }, [bun])

    const content = useCallback(() => {
        return ingredients.length !== 0 ? (
            <div className={`${styles.scroll_area} custom-scroll`} ref={dropMain} style={{ 'borderColor': isHoverMain ? 'blue' : 'transparent' }}>
                {ingredients.map((item, index) => (
                    <MainElements key={item.key} id={item._id} index={index} item={item} handleClose={handleClose} />
                ))}
            </div>
        ) : (
            <div ref={dropMain} className={styles.buns}>
                <ConstructorElementEmpty text='Выберите начинку' extraClass={borderClr(isHoverMain)} />
            </div>
        )
    }, [ingredients])


    return (
        <div className={styles.content} >
            {buns('top')}
            {content()}
            {buns('bottom')}
        </div>
    )
}

export default ConstructorItem;