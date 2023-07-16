import React, { FC } from "react";
import { OrderCardProps } from "./OrderCard.props";
import styles from "./OrderCard.module.css";
import Image from "next/image";

export const OrderCard: FC<OrderCardProps> = ({ data,...props }): JSX.Element => {
    const {img,title,price} = data
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img} alt="error" />
        </div>
        <div className={styles.info}>
          <p>{title}</p>
          <b>{price}</b>
          <span></span>
        </div>
        <div className={styles.status}>
          <div className={styles.item}>
            <b>Заказ от 24 мая</b>
            <span>34078988-0047</span>
          </div>
          <div className={styles.item}>
            <b>Статус</b>
            <span>Оплачен</span>
          </div>
        </div>
      </div>
    </>
  );
};
