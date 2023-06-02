import React, { FC } from "react";
import { AboutContactsProps } from "./AboutContacts.props";
import styles from "./AboutContacts.module.css";
import Link from "next/link";
import { Htag } from '@/shared/Htag/Htag';


export const AboutContacts: FC<AboutContactsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Link className={styles.link} href="/">Главная → Контакты</Link>
            <Htag tag="h1">Контакты</Htag>
            <div className={styles.map}>
              <iframe
                title="title"
                src="https://www.google.com/maps/d/embed?mid=1aWSWCFcxK1EX6-f31JeWOV3pmaeDVig&ehbc=2E312F"
              ></iframe>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.title}>
              <Htag tag="h2">ООО «СтройкаСтор»</Htag>
            </div>
            <div className={styles.info}>
              <ul className={styles.list}>
                <li>
                  115114, г. Москва, Дербеневская набережная, д. 7, стр. 8
                </li>
                <li>Павелецкая</li>
                <br />
                <br />
                <li>Автобусы 13, 106, 158, 184, 632</li>
                <li>Остановка «Дербеневская наб., д. 7»</li>
              </ul>
              <ul className={styles.list}>
                <li>ОГРН: 1047796688554</li>
                <li>ИНН 7703528301</li>
                <li>КПП 774850001</li>
                <li>ОКТМО 45380000</li>
                <li>ОГРН 1047796688554</li>
                <li>Расчетный рублевый счет: 40702810900001403352</li>
                <li>Банк: АО «Сбербанк» г. Москва</li>
                <li>Корреспондентский счет: 30101810200000000700</li>
                <li>БИК: 044525700</li>
              </ul>
              <ul className={styles.list}>
                <li>Поддержка клиентов</li>
                <li>info@stroykastore.ru</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
