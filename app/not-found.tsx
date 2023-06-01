import React from "react";
import styles from "./notFound.module.css";
import { Button, Htag } from "@/shared";

export default function NotFoundPage({ ...props }): JSX.Element {
  return (
    <>
      <main {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h1">404</Htag>
          <Htag tag="h2">Страница не найдена</Htag>
          <p>
            Неправильно набран адрес или такая страница больше не существует
          </p>
          <Button appearance='not-found-btn' className={styles.btn}>Перейти на главную</Button>
        </div>
      </main>
      ;
    </>
  );
}
