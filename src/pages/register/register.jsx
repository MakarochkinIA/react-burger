import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css';
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/auth";
import { validateForm } from "../../utils/utils";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setValue] = useState({ email: '', password: '', name: '' });
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      dispatch(register(form));
    } else {
      alert('Заполните все поля формы');
    }
  }


  return (
    <div className={styles.main}>
      <span className="text text_type_main-medium mb-6">Регистрация</span>
      <form className={styles.form_box} onSubmit={handleSubmit}>
      <div className={styles.input_box}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={onChange}
          value={form.value}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
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
        Зарегистрироваться
      </Button>
      </form>
      <span className="text text_type_main-default text_color_inactive mb-4">
        Уже зарегистрированы?
        <span className={styles.link} onClick={() => navigate("/login")}>
          {' Войти'}
        </span>
      </span>
    </div>
  );
}