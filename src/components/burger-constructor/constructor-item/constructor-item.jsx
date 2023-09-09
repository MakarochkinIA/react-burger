import styles from './contructor-item.module.css';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../utils/types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {
    DELETE_INGREDIENT,
  } from '../../../services/actions/current-ingredients';


const ConstructorItem = () => {
    const dispatch = useDispatch();
    const { bun, ingredients} = useSelector(
        state => state.constructorIngredients
      );
    const handleClose = (item) => {
        dispatch({
            type: DELETE_INGREDIENT,
            ingredient: item
        });
    }

    return (
        <div className={styles.content}>
            <div className={styles.buns}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                    extraClass={styles.bg_color}
                />
            </div>
            <div className={`${styles.scroll_area} custom-scroll`}>
                {ingredients.map((item) => (
                    <div className={styles.content_container} key={item._id}>
                        <div className={styles.scroll_area_svg}>
                            <DragIcon type='primary' />
                        </div>
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                            extraClass={styles.bg_color}
                            handleClose={() => {handleClose(item)}}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.buns}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                    extraClass={styles.bg_color}
                />
            </div>
        </div>
    )
}

export default ConstructorItem;