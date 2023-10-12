import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {useDispatch} from "react-redux";
import { login } from "../../services/actions/auth";
import { validateForm } from "../../utils/utils";

export const Login = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ email: '', password: '' });
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm(form)) {
        dispatch(login(form));
      } else {
        alert('Заполните все поля формы');
      }
    }

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Вход</span>
          <form className={styles.form_box} onSubmit={handleSubmit}>
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
          <Button htmlType="submit" type="primary" size="large" extraClass="mb-20">
            Войти
          </Button>
          </form>
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