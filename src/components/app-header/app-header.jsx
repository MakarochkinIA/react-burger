import styles from './app-header.module.css';
import { Logo, ProfileIcon, ListIcon, BurgerIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <nav className={styles.left_item}>
                    <a href='#' className={`${styles.link_item} pl-5 pr-5 pt-4 pb-4`}>
                        <BurgerIcon type='primary' />
                        <span className='text text_type_main-default pl-2'>
                            Конструктор
                        </span>
                    </a>
                    <a href='#' className={`${styles.link_item} pl-5 pr-5 pt-4 pb-4`}>
                        <ListIcon type='secondary' />
                        <span className='text text_type_main-default text_color_inactive pl-2'>
                            Лента заказов
                        </span>
                    </a>
                </nav>
                <div className={`${styles.logo} pt-4 pb-4`}>
                    <Logo />
                </div>
                <nav className={styles.right_item}>
                    <a href='#' className={`${styles.link_item} pt-4 pb-4 pl-5 pr-5`}>
                        <ProfileIcon type='secondary'/>
                        <span className='text text_type_main-default text_color_inactive pl-2'>
                            Личный кабинет
                        </span>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;