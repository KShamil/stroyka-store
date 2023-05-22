import React, { FC } from "react";
import { AboutDeliveryProps } from "./AboutDelivery.props";
import styles from "./AboutDelivery.module.css";
import Link from "next/link";
import { Htag } from "@/shared";

export const AboutDelivery: FC<AboutDeliveryProps> = ({
  ...props
}): JSX.Element => {
  return (
    <section {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Link href="/" className={styles.link}>Главная → Доставка</Link>
          <Htag tag="h2">Доставка</Htag>
          <p>
            Доставка осуществляется курьерами поставщика или службой курьеров
            Достависта. Также товар можно забрать самостоятельно от поставщика
          </p>
        </div>
      </div>
    </section>
  );
};
