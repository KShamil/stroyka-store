"use client";

import { AllOrders } from "@/widgets/AllOrders/AllOrders";
import { Metadata } from "next";
import React from "react";
import styles from "./Orders.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { OrderCard } from '@/entities/OrderCard/OrderCard';

export const metadata: Metadata = {
  title: "Stroyka-store - Заказы",
};

export default function OrdersPage(): JSX.Element {
  const orderItems = useSelector((state: RootState) => state.orders.items);
  return (
    <>
      <main className={styles.main}>
        <AllOrders />
        <div className={styles.content}>
          {orderItems &&
            orderItems.map((item) => <OrderCard key={item.id} data={item} />)}
        </div>
      </main>
    </>
  );
}
