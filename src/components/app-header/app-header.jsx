import styles from './app-header.module.css';
import {useNavigate, NavLink, useLocation } from "react-router-dom";
import { Logo, ProfileIcon, ListIcon, BurgerIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isNavLinkActive = (path) => location.pathname.split('/')[1] === path.split('/')[1];
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <nav className={styles.left_item}>
                    <NavLink to="/" className={() => isNavLinkActive('/') ? `${styles.link_item} pl-5 pr-5 pt-4 pb-4` : `${styles.inactive_link_item} pl-5 pr-5 pt-4 pb-4`}>
                            <BurgerIcon type='primary' />
                            <span className='pl-2'>
                                Конструктор
                            </span>
                    </NavLink>
                    <NavLink to="/orders" className={() => isNavLinkActive('/orders') ? `${styles.link_item} pl-5 pr-5 pt-4 pb-4` : `${styles.inactive_link_item} pl-5 pr-5 pt-4 pb-4`}>
                        <ListIcon type='secondary' />
                        <span className='pl-2'>
                            Лента заказов
                        </span>
                    </NavLink>
                </nav>
                <div className={`${styles.logo} pt-4 pb-4`}>
                    <Logo />
                </div>
                <nav className={styles.right_item}>
                    <NavLink to="/profile" className={() => isNavLinkActive('/profile') ? `${styles.link_item} pt-4 pb-4 pl-5 pr-5` : `${styles.inactive_link_item} pt-4 pb-4 pl-5 pr-5`}>
                        <ProfileIcon type='secondary'/>
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