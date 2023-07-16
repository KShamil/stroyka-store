"use client";

import React, { FC } from "react";
import { OrdersProps } from "./Orders.props";
import styles from "./Orders.module.css";
import { OrderCard } from "@/entities/OrderCard/OrderCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Orders: FC<OrdersProps> = ({ ...props }): JSX.Element => {
  const orderItems = useSelector((state: RootState) => state.orders.items);
  return (
    <>
      <section {...props} className={styles.wrapper}>
        {orderItems &&
          orderItems.map((item) => <OrderCard key={item.id} data={item} />)}
      </section>
    </>
  );
};
