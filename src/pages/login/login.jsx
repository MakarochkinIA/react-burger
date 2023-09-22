import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './login.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {useDispatch} from "react-redux";
import { login } from "../../services/actions/auth";

export const Login = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ email: '', password: '' });
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const toRegister = () => {
      navigate("/register");
    };
    const toForgotPassword = () => {
      navigate("/forgot-password");
    };
    const dispatch = useDispatch();

    const onClick = (form) => {
        dispatch(login(form));
    }

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Вход</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <EmailInput
              onChange={onChange}
              name={'email'}
              value={form.email}
              isIcon={false}
              extraClass="mb-6"
            />
            <PasswordInput
              onChange={onChange}
              value={form.password}
              name={'password'}
              extraClass="mb-6"
            />
          </div>
          <Button onClick={() => onClick(form)}  htmlType="button" type="primary" size="large" extraClass="mb-20">
            Войти
          </Button>
          <span className="text text_type_main-default text_color_inactive mb-4">
            Вы - новый пользователь? 
            <span className={styles.link} onClick={toRegister}>
              {' Зарегистрироваться'}
            </span>
          </span>
          <span className="text text_type_main-default text_color_inactive">
            Забыли пароль?
            <span className={styles.link} onClick={toForgotPassword}>
              {' Восстановить пароль'}
            </span>
          </span>
      </div>
      );
}