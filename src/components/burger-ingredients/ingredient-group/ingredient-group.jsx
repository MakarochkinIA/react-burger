import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../../utils/types'
import styles from './ingredient-group.module.css';
import IngredientItem from './ingredient-item/ingredient-item';


const IngredientGroup = ({ name, ingredients }) => {

    return (
        <>
            <p className='text text_type_main-medium'>
                {name}
            </p>
            <section className={styles.card}>
                {ingredients.map((item) => (
                    
                    <IngredientItem item={item} key={item._id}/>
                ))}
            </section>
        </>
    );
}
IngredientGroup.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
}
export default IngredientGroup;