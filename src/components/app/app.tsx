import { useState, useEffect } from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { getIngredients } from '../../utils/burger-api';


function App() {
  const [state, setState] = useState({
    loading: false,
    hasError: false,
    ingredients: []
  })

  useEffect(() => {
    setState({ ...state, loading: true });
    getIngredients()
      .then((data) => {
        setState({ ingredients: data.data, loading: false, hasError: false });
      })
      .catch((error) => {
        setState({ ...state, loading: false, hasError: true });
      })
  }, [])

  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.flex_container}>
        {state.loading && (<p className={styles.pre_show}>Идет загрузка</p>)}
        {state.hasError && (<p className={styles.pre_show}>Не удалось загрузить данные</p>)}
        {!state.loading && !state.hasError && state.ingredients.length && (
          <>
            <BurgerIngredients ingredients={state.ingredients} />
            <BurgerConstructor ingredients={state.ingredients} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
