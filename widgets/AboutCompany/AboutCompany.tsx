import React, { FC } from "react";
import { AboutCompanyProps } from "./AboutCompany.props";
import styles from "./AboutCompany.module.css";
import { Htag } from "@/shared";

export const AboutCompany: FC<AboutCompanyProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <Htag tag="h2">О компании</Htag>
          <div className={styles.info}>
            <p>
              В СтройкаСтор вы всегда можете купить все необходимые товары для
              ремонта дома и дачи. Хотите сделать ремонт в квартире? Строите
              загородный дом? Используйте строительные и отделочные материалы из
              нашего каталога.
            </p>
            <p>
              Быстрая доставка строительных товаров по низким ценам сделает ваши
              покупки более приятными. Ремонт может стоить дешево, если делать
              его с нами. Для вас всегда в наличии более 30 000 товаров для
              строительства по низким ценам каждый день. СтройкаСтор — это
              широкий ассортимент товаров для дома и ремонта недорого;
              Возможность заказать строительные и отделочные материалы для дома
              и дачи.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
