import { useState, useEffect } from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { getIngredientsRequest } from '../../utils/burger-api';


function App() {
  const [state, setState] = useState({
    loading: false,
    hasError: false,
    ingredients: []
  })


  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.flex_container}>
            <BurgerIngredients/>
            <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
