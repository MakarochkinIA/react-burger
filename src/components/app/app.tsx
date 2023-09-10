import { useState, useEffect } from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { getIngredientsRequest } from '../../utils/burger-api';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


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
      <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor />
      </DndProvider>
      </main>
    </>
  );
}

export default App;
