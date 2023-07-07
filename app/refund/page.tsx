import { AboutRefund } from '@/widgets/AboutRefund/AboutRefund';
import { ReturnPolicy } from '@/widgets/ReturnPolicy/ReturnPolicy';
import { Metadata } from 'next';
import React from "react";


export const metadata:Metadata = {
  title: "Stroyka-store - Возврат"
};

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
