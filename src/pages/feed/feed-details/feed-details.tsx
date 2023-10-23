import { useState, useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './ingredient-details.module.css';
import { Ingredient } from '../../../utils/types';
import IngredientList from './ingredient-list/ingredient-list';

const IngredientDetails: FC = () => {
  const location = useLocation();
  const { ingredient: stateIngredient } = useSelector(
    //@ts-ignore
    (state) => state.currentIngredient
  );
  const { ingredients } = useSelector(
    //@ts-ignore
    (state) => state.ingredients
);
  const [ingredient, setIngredient] = useState<Ingredient>(stateIngredient);
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
            <span>
                Test Header
            </span>
            <span>
                Выполнен
            </span>
            <span>
                Состав
            </span>
            <div>
                <IngredientList />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default IngredientDetails;