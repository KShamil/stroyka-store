import { AllOrders } from "@/widgets/AllOrders/AllOrders";
import { Metadata } from 'next';
import React from "react";

export const metadata:Metadata = {
  title: "Stroyka-store - Заказы"
};

export default function OrdersPage(): JSX.Element {
  return (
    <>
      <main>
        <AllOrders />
      </main>
    </>
  );
}
