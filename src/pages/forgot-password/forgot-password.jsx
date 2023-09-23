import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './forgot-password.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { userRelated } from "../../utils/burger-api";
import { FORGOT_PASSWORD } from "../../utils/constants";

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ email: ''});
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const onClick = () => {
        return userRelated(FORGOT_PASSWORD, form).then((res) => {
          if (res && res.success) {
              localStorage.setItem("reset", true);
              navigate('/reset-password')
          }
        });;
    };

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <EmailInput
              onChange={onChange}
              name={'email'}
              placeholder="Укажите e-mail"
              value={form.email}
              isIcon={false}
              extraClass="mb-6"
            />
          </div>
          <Button onClick={onClick} htmlType="button" type="primary" size="large" extraClass="mb-20">
            Восстановить
          </Button>
          <span className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль? 
            <span className={styles.link} onClick={() => navigate("/login")}>
              {' Войти'}
            </span>
          </span>
      </div>
      );
}