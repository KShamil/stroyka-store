"use client";

import React, { FC } from "react";
import { OrderCardProps } from "./OrderCard.props";
import styles from "./OrderCard.module.css";
import Image from "next/image";
import CloseBtn from "./close-btn.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItems } from "@/slice/cartSlice";
import { removeAllOrderItems } from "@/slice/ordersSlice";
import { RootState } from '@/store/store';

export const OrderCard: FC<OrderCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { id, img, title, price } = data;
  const cartItems = useSelector((state: RootState) => state.orders.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const handleRemoveAllFromCart = (id: string) => {
    dispatch(removeAllOrderItems(id));
  };
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img} alt="error" />
        </div>
        <div className={styles.info}>
          <p>{title}</p>
          <b>{price}</b>
          <span>{totalItems} шт.</span>
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
          <CloseBtn className={styles.icon} onClick={()=> handleRemoveAllFromCart(id)}/>
        </div>
      </div>
    </>
  );
};
