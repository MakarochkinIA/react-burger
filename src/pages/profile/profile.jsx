import {useNavigate} from "react-router-dom";
import { useState, useRef } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from './profile.module.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { logout, patchUser } from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fieldDisabled, setDisabled] = useState(true);
    const inputRef = useRef(null);
    const onIconClick = () => {
        setDisabled(false);
        setTimeout(() => inputRef.current?.focus(), 0);
    };
    
    const { user } = useSelector(
      state => state.user
    ) 
    const onBlur = (e) => {
      setDisabled(true);
    }
    const initialState = { email: user.email, password: '', name: user.name }
    const [form, setValue] = useState(initialState);
    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onClickLogout = () => {
        dispatch(logout());
    }
    const onClickPatch = (form) => {
      dispatch(patchUser(form));
    }
    const cancel = () => {
      setValue(initialState)
    }

    return (
      <div>
        <div className={styles.navigation}>
          <div className={`${styles.navigation_main} text_type_main-medium mb-20`}> 
            <span onClick={() => navigate("/profile")}>Профиль</span>
            <span className={styles.inactive} onClick={() => navigate("/orders")}>История заказов</span>
            <span className={styles.inactive} onClick={onClickLogout}>Выход</span>
          </div>
          <div className={styles.navigation_box}>
            В этом разделе вы можете изменить свои персональные данные
          </div>
        </div>
        <div className={styles.forms}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Input
                type={'text'}
                placeholder={'Имя'}
                ref={inputRef}
                onBlur={onBlur}
                onIconClick={onIconClick}
                onChange={onChange}
                value={form.name}
                name={'name'}
                icon="EditIcon"
                disabled={fieldDisabled}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
              />
              <EmailInput
                onChange={onChange}
                name={'email'}
                placeholder="Логин"
                value={form.email}
                isIcon={true}
                extraClass="mb-6"
              />
              <PasswordInput
                onChange={onChange}
                value={form.password}
                name={'password'}
                icon="EditIcon"
                extraClass="mb-6"
              />
              <div>
                {!(JSON.stringify(initialState) === JSON.stringify(form)) && (
                  <div className={styles.actions}>
                    <span onClick={cancel} className={styles.link}>
                      Отмена
                    </span>
                    <Button onClick={() => onClickPatch(form)} htmlType="button" type="primary" size="medium" extraClass="ml-6">
                      Сохранить
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
        </div>
       
      </div>
      );
}