import React, { FC } from "react";
import { AboutCartProps } from "./AboutCart.props";
import styles from "./AboutCart.module.css";
import Link from 'next/link';
import { Htag } from '@/shared/Htag/Htag';

export const AboutCart: FC<AboutCartProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.info}>
            <Link href="/" className={styles.link}>
              Главная → Доставка
            </Link>
            <Htag tag="h1">Корзина</Htag>
          </div>
        </div>
      </section>
    </>
  );
};
