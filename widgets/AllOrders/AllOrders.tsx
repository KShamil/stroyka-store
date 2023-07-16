import React, { FC } from "react";
import { AllOrdersProps } from "./AllOrders.props";
import styles from "./AllOrders.module.css";
import Link from "next/link";
import { Htag } from "@/shared/Htag/Htag";

export const AllOrders: FC<AllOrdersProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.info}>
            <Link href="/" className={styles.link}>
              Главная → Заказы
            </Link>
            <Htag tag="h1">Заказы</Htag>
          </div>
        </div>
      </section>
    </>
  );
};
