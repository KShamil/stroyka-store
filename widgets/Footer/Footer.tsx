import React, { FC } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import Link from "next/link";
import LogoIcon from "./Logo.svg";
import MailIcon from "./mail.svg";
import LocationIcon from "./location.svg";
import VisaIcon from "./Visa.svg";
import MasterIcon from "./logo-master.svg";
import MaestroIcon from "./logo-master.svg";
import MirIcon from "./logo-mir.svg";

export const Footer: FC<FooterProps> = ({ ...props }): JSX.Element => {
  return (
    <footer {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <Link href="" className={styles.link}>
                  <LogoIcon className={styles.logo}/>
                </Link>
              </li>
              <li>
                <Link href="" className={styles.mail}>
                  <MailIcon />
                  <span>info@stroykastore.ru</span>
                </Link>
              </li>
              <li>
                <Link href="" className={styles.location}>
                  <LocationIcon />
                  <span>Москва, ул. Камушкина 10</span>
                </Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <li>
                <Link href="" className={styles.link}>Личный кабинет</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Заказы</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Избранное</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Корзина</Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <li>
                <Link href="" className={styles.link}>Каталог</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Акции</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Бренды</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Контакты</Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <li>
                <Link href="" className={styles.link}>Стать продавцом</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Доставка</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Возврат</Link>
              </li>
              <li>
                <Link href="" className={styles.link}>Документация</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© СтройкаСтор</span>
          <div className={styles.icons}>
            <VisaIcon />
            <MasterIcon />
            <MaestroIcon />
            <MirIcon />
          </div>
          <span>Cделано в KRUGLOV STUDIO</span>
        </div>
      </div>
    </footer>
  );
};
