import { useNavigate } from "react-router-dom";
import { FC, FormEvent } from "react";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';
import { userRelated } from "../../utils/burger-api";
import { FORGOT_PASSWORD } from "../../utils/constants";
import { validateForm } from "../../utils/utils";
import { useForm } from "../../hooks/useForm";

const ForgotPassword: FC = () => {
    const navigate = useNavigate();
    const {values: form, handleChange} = useForm({ email: '', password: '' });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm(form)) {
          return userRelated(FORGOT_PASSWORD, form).then((res) => {
              localStorage.setItem("reset", "true");
              navigate('/reset-password')
          });
      } else {
          alert('Заполните все поля формы');
      }
    };

    return (
      <div className={styles.main}>
          <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
          <form className={styles.form_box} onSubmit={handleSubmit}>
          <div className={styles.input_box}>
            <EmailInput
              onChange={handleChange}
              name={'email'}
              placeholder="Укажите e-mail"
              value={form.email}
              isIcon={false}
              extraClass="mb-6"
            />
          </div>
          <Button htmlType="submit" type="primary" size="large" extraClass="mb-20">
            Восстановить
          </Button>
          </form>
          <span className="text text_type_main-default text_color_inactive mb-4">
            Вспомнили пароль? 
            <span className={styles.link} onClick={() => navigate("/login")}>
              {' Войти'}
            </span>
          </span>
      </div>
    );
}

export default ForgotPassword;
