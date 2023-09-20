import IngredientDetails from "../../components/burger-ingredients/ingredient-details/ingredient-details";
import styles from './ingredient-details.module.css'

export const Details = () => {

    return (
        <div className={styles.main}>
            <IngredientDetails />
        </div>
    )
}