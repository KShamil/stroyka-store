import { AboutDelivery, FAQ, MakeAnOrder } from "@/widgets";
import React from "react";

export default function DeliveryPage(): JSX.Element {
  return (
    <main>
      <AboutDelivery />
      <MakeAnOrder/>
      <FAQ/>
    </main>
  );
}
