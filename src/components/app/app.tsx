import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import data from '../../utils/data.js'

function App() {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.flex_container}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data} />
      </main>
    </>
  );
}

export default App;
