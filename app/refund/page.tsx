import { AboutRefund } from '@/widgets/AboutRefund/AboutRefund';
import { ReturnPolicy } from '@/widgets/ReturnPolicy/ReturnPolicy';
import React from "react";

export default function RefundPage(): JSX.Element {
  return (
    <>
      <main>
        <AboutRefund />
        <ReturnPolicy />
      </main>
      ;
    </>
  );
}
