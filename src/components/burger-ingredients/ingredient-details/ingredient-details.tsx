import { useState, useEffect, FC } from 'react';
import { useSelector } from '../../../hooks/redux-hooks';
import { useLocation } from 'react-router-dom';
import styles from './ingredient-details.module.css';
import { Ingredient } from '../../../utils/types';

const IngredientDetails: FC = () => {
  const location = useLocation();
  const { ingredient: stateIngredient } = useSelector(
    (state) => state.currentIngredient
  );
  const { ingredients } = useSelector(
    (state) => state.ingredients
);
  const [ingredient, setIngredient] = useState<Ingredient | undefined>(stateIngredient);
  useEffect(() => {    
    setIngredient(ingredients.find((item: Ingredient) => item._id === location.pathname.split('/')[2])) 
  }, [ingredients, location.pathname]);
  const notModal = !(location.state && location.state.background)

  return (
    <>
      {typeof ingredient === 'object' && Object.keys(ingredient).length !== 0 && (
        <>
          {notModal ? (
            <div className={styles.head}>
              <span className={`text text_type_main-large`}>
                Детали ингредиента
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className= {notModal ? styles.ingredient_details : styles.ingredient_details_modal}>
            <img
              alt='Нет изображения'
              src={ingredient.image}
              className={`${styles.image} mb-4`}
            />
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
        </>
      )}
    </>
  );
};

export default IngredientDetails;
