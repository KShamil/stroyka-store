'use client'

import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { PersonalAreaProps } from "./PersonalArea.props";
import styles from "./PersonalArea.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { Input } from "@/shared/Input/Input";
import { Button } from "@/shared/Button/Button";

export const PersonalArea: FC<PersonalAreaProps> = ({
  ...props
}): JSX.Element => {
//   interface IFormData {
//     name: string;
//     surname: string;
//     phone: number;
//     email: string;
//     newPassword: string | number;
//     repeatPassword: string | number;
//   }
//   const [formData, setFormData] = useState<IFormData>({
//     name: "",
//     surname: "",
//     phone: 0,
//     email: "",
//     newPassword: "",
//     repeatPassword: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Htag tag="h2">Личная информация</Htag>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.info}>
            <div className={styles.input}>
              <label htmlFor="">Имя</label>
              <Input
                appearance="info-input"
                placeholder="Имя"
                type="text"
              ></Input>
            </div>
            <div className={styles.input}>
              <label htmlFor="">Фамилия</label>
              <Input
                appearance="info-input"
                placeholder="Фамилия"
                type="text"
              ></Input>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.input}>
              <label htmlFor="">Дата рождения</label>
              <Input
                appearance="info-input"
                placeholder="Дата рождения"
                type="date"
              ></Input>
            </div>
            <div className={styles.input}>
              <label htmlFor="">Телефон</label>
              <Input
                appearance="info-input"
                placeholder="Телефон"
                type="number"
              ></Input>
            </div>
          </div>
          <div className={styles.email}>
            <label htmlFor="">E-mail</label>
            <Input
              appearance="email-input"
              placeholder="E-mail"
              type="email"
            ></Input>
          </div>
          <div className={styles.info}>
            <div className={styles.input}>
              <label htmlFor="">Новый пароль</label>
              <Input
                appearance="info-input"
                placeholder="Новый пароль"
                type="password"
              ></Input>
            </div>
            <div className={styles.input}>
              <label htmlFor="">Подтверждение пароля</label>
              <Input
                appearance="info-input"
                placeholder="Подтверждение пароля"
                type="password"
              ></Input>
            </div>
          </div>
          <Button appearance="save-btn">Сохранить</Button>
        </form>
      </div>
    </>
  );
};
