import React, { FC } from "react";
import { BottomHeaderProps } from "./BottomHeader.props";
import styles from "./BottomHeader.module.css";
import Link from "next/link";

export const BottomHeader: FC<BottomHeaderProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <Link href="" className={styles.link}></Link>Акции
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Строительные материалы
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Керамическая плитка
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Краски
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Сантехника
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Напольные покрытия
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Инструменты
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Обои
            </li>
            <li>
              <Link href="" className={styles.link}></Link>Окна
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
