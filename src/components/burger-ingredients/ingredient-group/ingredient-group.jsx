import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { IngredientPropTypes } from '../../../utils/types'
import styles from './ingredient-group.module.css';
import IngredientItem from './ingredient-item/ingredient-item';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useMemo } from 'react';
import { useDrag } from "react-dnd";


const IngredientGroup = ({ name, ingredients, showDetail }) => {
    const data = useSelector(
        state => state.constructorIngredients
    )

    function countOccurrences(arr, obj) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === obj) {
            count++;
          }
        }
        return count;
      }

    const getCounter = (data, obj) => {
        return obj.type === 'bun' ? (obj === data.bun ? 1 : 0) : countOccurrences(data.ingredients, obj)
    }


    return (
        <>
            <p className='text text_type_main-medium'>
                {name}
            </p>
            <section className={styles.card}>
                {ingredients.map((item) => (
                    
                    <IngredientItem item={item} showDetail={showDetail} />
                ))}
            </section>
        </>
    );
}
IngredientGroup.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired,
    showDetail: PropTypes.func.isRequired
}
export default IngredientGroup;