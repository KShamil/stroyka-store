"use client";

import React from "react";
import styles from "./notFound.module.css";
import Link from "next/link";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import { redirect } from "next/navigation";

export default function NotFoundPage({ ...props }): JSX.Element {
  const goToHomePage = () => {
    redirect("/");
  };
  return (
    <>
      <main {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h1">404</Htag>
          <Htag tag="h2">Страница не найдена</Htag>
          <p>
            Неправильно набран адрес или такая страница больше не существует
          </p>
          <Button appearance="not-found-btn" className={styles.btn}>
            <Link href="/" onClick={goToHomePage}>
              Перейти на главную
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
