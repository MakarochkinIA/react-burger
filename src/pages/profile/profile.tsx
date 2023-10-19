import { Outlet, useLocation } from "react-router-dom";
import { useState, useRef, FC, ChangeEvent, FormEvent, FocusEvent } from "react";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { patchUser } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { NavigateProfile } from "./navigate-profile/navigate-profile";

export const Profile: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [fieldDisabled, setDisabled] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  //@ts-ignore
  const { user } = useSelector((state: { user }) => state.user);

  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    setDisabled(true);
  };

  const initialState = { email: user.email, password: "", name: user.name };
  const [form, setValue] = useState(initialState);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
    setIsEdit(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //@ts-ignore
    dispatch(patchUser(form));
    setIsEdit(false);
    e.preventDefault();
  };

  const cancel = () => {
    setValue(initialState);
    setIsEdit(false);
  };

  return (
    <div>
      <NavigateProfile />
      {!(location.pathname === '/profile') ? <Outlet /> :
      <form className={styles.forms} onSubmit={handleSubmit}>
        <div className={styles.input_box}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            ref={inputRef}
            onBlur={onBlur}
            onIconClick={onIconClick}
            onChange={onChange}
            value={form.name}
            name={"name"}
            icon="EditIcon"
            disabled={fieldDisabled}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
          />
          <EmailInput
            onChange={onChange}
            name={"email"}
            placeholder="Логин"
            value={form.email}
            isIcon={true}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={onChange}
            value={form.password}
            name={"password"}
            icon="EditIcon"
            extraClass="mb-6"
          />
          {isEdit && (
            <div className={styles.actions}>
              <span onClick={cancel} className={styles.link}>
                Отмена
              </span>
              <Button htmlType="submit" type="primary" size="medium" extraClass="ml-6">
                Сохранить
              </Button>
            </div>
          )}
        </div>
      </form>}
    </div>
  );
};