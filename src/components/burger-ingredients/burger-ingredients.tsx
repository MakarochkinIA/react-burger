import { useState, useRef, FC, RefObject } from 'react';
import { useSelector } from '../../hooks/redux-hooks';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientGroup from './ingredient-group/ingredient-group';
import { Ingredient } from '../../utils/types';

const BurgerIngredients: FC = () => {
    const { ingredientsRequest, ingredientsFailed, ingredients } = useSelector(
        (state) => state.ingredients
    );
    const [distance, setDistance] = useState<{[key: string]: number}>({});

    const categoriesRefs: {[key: string]: RefObject<HTMLLIElement>} = {
        buns: useRef(null),
        sauce: useRef(null),
        main: useRef(null),
    }

    function setTab(tab: string) {
        setCurrent(tab);
        categoriesRefs[tab].current?.scrollIntoView({ behavior: "smooth" });
    }

    const tabRef = useRef<HTMLDivElement>(null);

    const getMinValue = (data: {[key: string]: number}) => {
        let minAttributeName = '';
        let minValue = Infinity;
        for (const key in data) {
            if (data[key] < minValue) {
                minValue = data[key];
                minAttributeName = key;
            }
        }
        return minAttributeName;
    }

    const handleScroll = () => {
      if (tabRef.current) {
        const scrollPosition = tabRef.current.getBoundingClientRect().bottom;
        const newDistance = {
          buns: Math.abs(scrollPosition - categoriesRefs.buns.current!.getBoundingClientRect().top),
          sauce: Math.abs(scrollPosition - categoriesRefs.sauce.current!.getBoundingClientRect().top),
          main: Math.abs(scrollPosition - categoriesRefs.main.current!.getBoundingClientRect().top),
        };
        setDistance({
          ...distance,
          ...newDistance
        })
        setCurrent(getMinValue(distance));
      }
    };

    const buns = ingredients.filter((item: Ingredient) => item.type === 'bun');
    const sauce = ingredients.filter((item: Ingredient) => item.type === 'sauce');
    const main = ingredients.filter((item: Ingredient) => item.type === 'main');

    const [current, setCurrent] = useState('buns');

    return (
        <>
            {ingredientsRequest && (<p className={styles.pre_show}>Идет загрузка</p>)}
            {ingredientsFailed && (<p className={styles.pre_show}>Не удалось загрузить данные</p>)}
            {!ingredientsRequest && !ingredientsFailed && ingredients.length &&
                (<div className={styles.burger_ingredients} >
                    <p className='text text_type_main-large pt-10 mb-5'>
                        Соберите бургер
                    </p>
                    <div ref={tabRef} className={`${styles.tab} mb-10`}>
                        <Tab value="buns" active={current === 'buns'} onClick={() => setTab('buns')}>
                            Булки
                        </Tab>
                        <Tab value="sauce" active={current === 'sauce'} onClick={() => setTab('sauce')}>
                            Соусы
                        </Tab>
                        <Tab value="main" active={current === 'main'} onClick={() => setTab('main')}>
                            Начинки
                        </Tab>
                    </div>

                    <ul className={`${styles.group_list} custom-scroll`} onScroll={handleScroll} data-testid="bun">
                        <li ref={categoriesRefs.buns} >
                            <IngredientGroup
                                name='Булки'
                                ingredients={buns}
                            />
                        </li>
                        <li ref={categoriesRefs.sauce}>
                            <IngredientGroup
                                name='Соусы'
                                ingredients={sauce}
                            />
                        </li>
                        <li ref={categoriesRefs.main}>
                            <IngredientGroup
                                name='Начинка'
                                ingredients={main}
                            />
                        </li>
                    </ul>
                </div>)}
        </>
    );
}

export default BurgerIngredients;