import React, { FC } from "react";
import { TopHeaderProps } from "./TopHeader.props";
import styles from "./TopHeader.module.css";
import LocationIcon from "./location.svg";
import Link from "next/link";

export const TopHeader: FC<TopHeaderProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LocationIcon />
            <span>Москва</span>
          </div>
          <div className={styles.right}>
            <nav className={styles.navList}>
              <ul className={styles.list}>
                <li>
                  <Link className={styles.link} href="">
                    Бренды
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/delivery">
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/refund">
                    Возврат
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/documentation">
                    Документация
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/contacts">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
