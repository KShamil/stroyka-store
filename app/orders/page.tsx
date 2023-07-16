import { AllOrders } from "@/widgets/AllOrders/AllOrders";
import { Metadata } from "next";
import React from "react";
import styles from "./Orders.module.css";
import { Orders } from "@/widgets/Orders/Orders";

export const metadata: Metadata = {
  title: "Stroyka-store - Заказы",
};

export default function OrdersPage(): JSX.Element {
  return (
    <>
      <main className={styles.main}>
        <AllOrders />
        <div className={styles.content}>
          <Orders />
        </div>
      </main>
    </>
  );
}
