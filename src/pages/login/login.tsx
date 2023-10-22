import { useNavigate } from "react-router-dom";
import { FC, FormEvent } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import { useDispatch } from "react-redux";
import { login } from "../../services/actions/auth";
import { validateForm } from "../../utils/utils";
import { useForm } from "../../hooks/useForm";

export const Login: FC = () => {
  const navigate = useNavigate();
  const {values: form, handleChange} = useForm({ email: '', password: '' });

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(form)) {
      //@ts-ignore
      dispatch(login(form));
    } else {
      alert('Заполните все поля формы');
    }
  };

  return (
    <div className={styles.main}>
      <span className="text text_type_main-medium mb-6">Вход</span>
      <form className={styles.form_box} onSubmit={handleSubmit}>
        <div className={styles.input_box}>
          <EmailInput
            onChange={handleChange}
            name={'email'}
            value={form.email}
            isIcon={false}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={handleChange}
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
};