import styles from './contructor-item.module.css';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../utils/types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrop } from 'react-dnd'
import { ConstructorElementEmpty } from '../constructor-element-empty/constructor-element-empty'
import {
    DELETE_INGREDIENT,
} from '../../../services/actions/current-ingredients';


const ConstructorItem = ({ onDropHandler }) => {
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
    const borderClr = (isHover) => {
        return {borderColor: isHover ? 'blue' : 'transparent'}
    }

    const buns = (type) => {
        const adds = type === 'top' ? '(верх)' : '(низ)'
        const dropRef = type === 'top' ? dropTopBun : dropBottomBun
        const isHover = type === 'top' ? isHoverTopBun : isHoverBottomBun
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
    }

    const content = () => {
        return ingredients.length !== 0 ? (
            <div className={`${styles.scroll_area} custom-scroll`} ref={dropMain} style={{ 'borderColor': isHoverMain ? 'blue' : 'transparent' }}>
                
                {ingredients.map((item) => (
                    <div className={styles.content_container} key={item.key}>
                    <div className={styles.scroll_area_svg}>
                        <DragIcon type='primary' />
                    </div>
                    <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                        extraClass={`${styles.bg_color}`}
                        handleClose={() => { handleClose(item) }}
                    />
                </div>
                ))}
            </div>
        ) : (
            <div ref={dropMain} className={styles.buns}>
                {console.log(isHoverMain)}
                <ConstructorElementEmpty text='Выберите начинку' extraClass={borderClr(isHoverMain)} />
            </div>
        )
    }


    return (
        <div className={styles.content} >
            {buns('top')}
            {content()}
            {buns('bottom')}
        </div>
    )
}

export default ConstructorItem;