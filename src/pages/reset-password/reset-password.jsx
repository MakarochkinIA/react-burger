import {useNavigate, Navigate} from "react-router-dom";
import { useState } from "react";
import { PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import { userRelated } from "../../utils/burger-api";
import { RESET_PASSWORD } from "../../utils/constants";

export const ResetPassword = () => {
    const navigate = useNavigate();
    const reset = localStorage.getItem('reset')
    const [form, setValue] = useState({ token: '', password: '' });
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const onClick = () => {
      return userRelated(RESET_PASSWORD, form).then((res) => {
        if (res && res.success) {
            localStorage.removeItem('reset')
            navigate('/login')
        }
      });;
    };

    return (
      <div className={styles.main}>
          {!reset && <Navigate to="/" />}
          <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
          <div className={styles.input_box}>
            <PasswordInput
              onChange={onChange}
              value={form.password}
              placeholder="Введите новый пароль"
              name={'password'}
              extraClass="mb-6"
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={onChange}
              value={form.value}
              name={'token'}
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
            <span className={styles.link} onClick={() => navigate("/login")}>
              {' Сохранить'}
            </span>
          </span>
      </div>
      );
}