import { useState, useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './ingredient-details.module.css';
import { getIngredientsRequest } from '../../utils/burger-api';
import { Ingredient } from '../../utils/types';

const IngredientDetails: FC = () => {
  const location = useLocation();
  const { ingredient: stateIngredient } = useSelector(
    (state: any) => state.currentIngredient
  );
  const [ingredient, setIngredient] = useState<Ingredient>(stateIngredient);

  useEffect(() => {
    if (typeof ingredient === 'object' && Object.keys(ingredient).length === 0) {
      getIngredientsRequest()
        .then((res) => {
          const foundIngredient = res.data.find(
            (item: Ingredient) => item._id === location.pathname.split('/')[2]
          );
          setIngredient(foundIngredient);
        });
    }
  }, [ingredient, location.pathname]);

  return (
    <>
      {typeof ingredient === 'object' && Object.keys(ingredient).length !== 0 && (
        <>
          {!(location.state && location.state.background) ? (
            <div className={styles.head}>
              <span className={`text text_type_main-large`}>
                Детали ингредиента
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className={styles.ingredient_details}>
            <img
              alt='Нет изображения'
              src={ingredient.image}
              className={`${styles.image} mb-4`}
            />
            <p className='text text_type_main-medium mb-8'>{ingredient.name}</p>
            <div className={`${styles.data} mb-15`}>
              <div className={styles.data_item}>
                <p className='text text_type_main-default'>Калории, ккал</p>
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