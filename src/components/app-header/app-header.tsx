import {FC} from 'react'
import styles from './app-header.module.css';
import { NavLink, useLocation } from "react-router-dom";
import { Logo, ProfileIcon, ListIcon, BurgerIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader: FC = () => {

    const location = useLocation();
    const isRouteActive = (path: string) => location.pathname.split('/')[1] === path.split('/')[1];
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <nav className={styles.left_item}>
                    <NavLink to="/" className={({isActive}) =>
                        "pl-5 pr-5 pt-4 pb-4" + (!isActive ? ` ${styles.inactive_link_item}` : ` ${styles.link_item}`)
                    }>
                            {isRouteActive('/') ? <BurgerIcon type='primary' /> : <BurgerIcon type='secondary' />}
                            <span className='pl-2'>
                                Конструктор
                            </span>
                    </NavLink>
                    <NavLink to="profile/orders" className={({isActive}) =>
                        "pl-5 pr-5 pt-4 pb-4" + (!isActive ? ` ${styles.inactive_link_item}` : ` ${styles.link_item}`)
                    }>
                        {isRouteActive('profile/orders') ? <ListIcon type='primary' /> : <ListIcon type='secondary' />}
                        <span className='pl-2'>
                            Лента заказов
                        </span>
                    </NavLink>
                </nav>
                <div className={`${styles.logo} pt-4 pb-4`}>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                </div>
                <nav className={styles.right_item}>
                    <NavLink to="/profile" className={({isActive}) =>
                        "pl-5 pr-5 pt-4 pb-4" + (!isActive ? ` ${styles.inactive_link_item}` : ` ${styles.link_item}`)
                    }>
                        {isRouteActive('/profile') ? <ProfileIcon type='primary' /> : <ProfileIcon type='secondary' />}
                        <span className='pl-2'>
                            Личный кабинет
                        </span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;