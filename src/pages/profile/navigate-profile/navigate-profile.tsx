import { FC } from 'react'
import { NavLink } from "react-router-dom";
import styles from './navigate-profile.module.css';
import { logout } from "../../../services/actions/auth";
import { useDispatch } from "react-redux";

export const NavigateProfile: FC = () => {
    const dispatch = useDispatch();
    const onClickLogout = () => {
        //@ts-ignore
        dispatch(logout());
      }

    return (
        <div className={styles.navigation}>
            <div className={`${styles.navigation_main} text_type_main-medium mb-20`}>
                <NavLink end to="/profile" className={({ isActive }) => {
                    return (isActive ? styles.active : styles.inactive)
                }

                }>
                    <span>Профиль</span>
                </NavLink>
                <NavLink to="/profile/orders" className={({ isActive }) =>
                    (isActive ? styles.active : styles.inactive)
                }>
                    <span>История заказов</span>
                </NavLink>
                <span className={styles.inactive} onClick={onClickLogout}>Выход</span>
            </div>
            <div className={styles.navigation_box}>
                В этом разделе вы можете изменить свои персональные данные
            </div>
        </div>
    )
}