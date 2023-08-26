import styles from './contructor-item.module.css';
import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../utils/types'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ConstructorItem = ({ ingredients }) => {
    const bunArr = ingredients.filter(item => item.type === 'bun')
    const bun = bunArr[0]
    const items = ingredients.filter(item => item.type !== 'bun')

    return (
        <div className={styles.content}>
            <div className={styles.buns}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            <div className={`${styles.scroll_area} custom-scroll`}>
                {items.map((item) => (
                    <div className={styles.content_container} key={item._id}>
                        <div className={styles.scroll_area_svg}>
                            <DragIcon type='primary' />
                        </div>
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
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
                />
            </div>
        </div>
    )
}

ConstructorItem.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
}

export default ConstructorItem;