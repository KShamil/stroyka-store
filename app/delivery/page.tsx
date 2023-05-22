import { AboutDelivery, FAQ, MakeAnOrder } from "@/widgets";
import React from "react";

export default function DeliveryPage({ ...props }): JSX.Element {
  return (
    <div {...props}>
      <AboutDelivery />
      <MakeAnOrder/>
      <FAQ/>
    </div>
  );
}
