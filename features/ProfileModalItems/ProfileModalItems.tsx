import React, { FC, FormEvent } from "react";
import { ProfileModalItemsProps } from "./ProfileModalItems.props";
import styles from "./ProfileModalItems.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { Input } from "@/shared/Input/Input";
import Link from "next/link";
import { Button } from "@/shared/Button/Button";

export const ProfileModalItems: FC<ProfileModalItemsProps> = ({
  openModal,
  ...props
}): JSX.Element => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Htag tag="h2">Вход</Htag>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="">E-mail</label>
            <Input
              appearance="info-input"
              type="email"
              placeholder="youmail@mail.com"
            ></Input>
          </div>
          <div className={styles.input}>
            <label htmlFor="">Пароль</label>
            <Input
              appearance="info-input"
              type="password"
              placeholder="****************"
            ></Input>
            <Link href="" className={styles.link}>
              Забыли пароль?
            </Link>
          </div>
          <div className={styles.buttons}>
            <Button appearance="sign-in-btn">Войти</Button>
            <Button appearance="create-btn" onClick={() => openModal()}>
              <Link href="#">Создать учетную запись</Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
