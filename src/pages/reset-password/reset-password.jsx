import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './reset-password.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { userRelated } from "../../utils/burger-api";
import { RESET_PASSWORD } from "../../utils/constants";

export const ResetPassword = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ value: '', password: '' });
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const onClick = () => {
      return userRelated(RESET_PASSWORD, form).then((res) => {
        if (res && res.success) {
            navigate('/login')
        }
      });;
    };
    const toLogin = () => {
        navigate("/login");
    };

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <PasswordInput
              onChange={onChange}
              value={form.password}
              placeholder="Введите новый пароль"
              name={'Пароль'}
              extraClass="mb-6"
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={onChange}
              value={form.value}
              name={'name'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="mb-6"
            />
          </div>
          <Button onClick={onClick} htmlType="button" type="primary" size="large" extraClass="mb-20">
            Восстановить
          </Button>
          <span className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль? 
            <span className={styles.link} onClick={toLogin}>
              {' Сохранить'}
            </span>
          </span>
      </div>
      );
}