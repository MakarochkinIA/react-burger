import { useSelector } from 'react-redux';
import styles from './ingredient-details.module.css';


const IngredientDetails = () => {
    const {ingredient} = useSelector(
        state => state.currentIngredient
    )
    return (
        <div className={styles.ingredient_details}>
            <img alt='Нет изображения' src={ingredient.image} className={`${styles.image} mb-4`} />
            <p className='text text_type_main-medium mb-8'>{ingredient.name}</p>
            <div className={`${styles.data} mb-15`}>
                <div className={styles.data_item}>
                    <p className='text text_type_main-default'>Калории,ккал</p>
                    <p className='text text_type_digits-default'>{ingredient.calories}</p>
                </div>
                <div className={styles.data_item}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{ingredient.proteins}</p>
                </div>
                <div className={styles.data_item}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{ingredient.fat}</p>
                </div>
                <div className={styles.data_item}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
}


export default IngredientDetails;