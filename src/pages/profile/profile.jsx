import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './profile.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Profile = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('')
    const [email, setEmail] = useState('')
    const onLoginChange = e => {
      setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    const onPasswordChange = e => {
      setPassword(e.target.value)
    }
    const onClick = () => {
        navigate("/profile");
    };

    return (
      <div>
        <div className={styles.navigation}>
          <div className={`${styles.navigation_main} text_type_main-medium mb-20`}> 
            <span>Профиль</span>
            <span>История заказов</span>
            <span>Выход</span>
          </div>
          <span className={styles.navigation_text}>В этом разделе вы можете изменить свои персональные данные</span>
        </div>
        <div className={styles.forms}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setValue(e.target.value)}
                value={value}
                name={'name'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
              />
              <EmailInput
                onChange={onLoginChange}
                name={'E-mail'}
                placeholder="Логин"
                value={email}
                isIcon={true}
                extraClass="mb-6"
              />
              <PasswordInput
                onChange={onPasswordChange}
                value={password}
                name={'password'}
                icon="EditIcon"
                extraClass="mb-6"
              />
            </div>
        </div>
        
      </div>
      );
}