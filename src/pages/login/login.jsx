import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {useDispatch} from "react-redux";
import { login } from "../../services/actions/auth";

export const Login = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ email: '', password: '' });
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();

    const onClick = (form) => {
        dispatch(login(form));
    }

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Вход</span>
          <div className={styles.input_box}>
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
            <span className={styles.link} onClick={() => navigate("/register")}>
              {' Зарегистрироваться'}
            </span>
          </span>
          <span className="text text_type_main-default text_color_inactive">
            Забыли пароль?
            <span className={styles.link} onClick={() => navigate("/forgot-password")}>
              {' Восстановить пароль'}
            </span>
          </span>
      </div>
      );
}