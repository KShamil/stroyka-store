import React, { FC } from "react";
import { ProfileModalProps } from "./ProfileModal.props";
import styles from "./ProfileModal.module.css";
import Link from "next/link";

export const ProfileModal: FC<ProfileModalProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>Вход</h3>
          </div>
          <div className={styles.main}>
            <div className={styles.input}>
              <label htmlFor="">E-mail</label>
              <input type="email" />
            </div>
            <div className={styles.input}>
              <label htmlFor="">Пароль</label>
              <input type="password" />
              <Link href="" className={styles.link}>
                Забыли пароль?
              </Link>
            </div>
          </div>
          <div className={styles.btns}></div>
        </div>
      </div>
    </>
  );
};
