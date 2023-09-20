import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './forgot-password.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const ForgotPassword = () => {
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
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <EmailInput
              onChange={onLoginChange}
              name={'Укажите e-mail'}
              placeholder="Укажите e-mail"
              value={email}
              isIcon={false}
              extraClass="mb-6"
            />
          </div>
          <Button  htmlType="button" type="primary" size="large" extraClass="mb-20">
            Восстановить
          </Button>
          <span className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль? 
            <span className={styles.link} >
              {' Войти'}
            </span>
          </span>
      </div>
      );
}