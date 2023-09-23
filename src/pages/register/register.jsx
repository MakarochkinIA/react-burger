import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './register.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {useDispatch} from "react-redux";
import { register } from "../../services/actions/auth";

export const Register = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ email: '', password: '', name: '' });
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();

    const onClick = (form) => {
        dispatch(register(form));
    }

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Регистрация</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          <Button onClick={() => onClick(form)} htmlType="button" type="primary" size="large" extraClass="mb-20">
            Зарегистрироваться
          </Button>
          <span className="text text_type_main-default text_color_inactive mb-4">
            Уже зарегистрированы? 
            <span className={styles.link} onClick={() => navigate("/login")}>
              {' Войти'}
            </span>
          </span>
      </div>
      );
}