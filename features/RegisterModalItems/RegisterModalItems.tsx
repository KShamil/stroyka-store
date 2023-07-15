import React, { FC } from "react";
import { RegisterModalItemsProps } from "./RegisterModalItems.props";
import styles from "./RegisterModalItems.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { Input } from "@/shared/Input/Input";
import { Button } from "@/shared/Button/Button";

export const RegisterModalItems: FC<RegisterModalItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Htag tag="h2">Регистрация</Htag>
        <form action="" className={styles.form}>
          <div className={styles.info}>
            <div className={styles.input}>
              <label htmlFor="">Имя</label>
              <Input
                appearance="info-input"
                type="text"
                placeholder="Имя"
              ></Input>
            </div>
            <div className={styles.input}>
              <label htmlFor="">E-mail</label>
              <Input
                appearance="info-input"
                type="email"
                placeholder="youmail@mail.com"
              ></Input>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.input}>
              <label htmlFor="">Новый пароль</label>
              <Input
                appearance="info-input"
                type="password"
                placeholder="****************"
              ></Input>
            </div>
            <div className={styles.input}>
              <label htmlFor="">Подтверждение пароля</label>
              <Input
                appearance="info-input"
                type="password"
                placeholder="****************"
              ></Input>
            </div>
          </div>
          <Button appearance="sign-in-btn">Зарегистрироваться</Button>
        </form>
      </div>
    </>
  );
};
