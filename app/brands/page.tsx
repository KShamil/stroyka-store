import { AllBrands } from "@/widgets/AllBrands/AllBrands";
import { PopularBrends } from "@/widgets/PopularBrends/PopularBrends";
import { Metadata } from 'next';
import React from "react";


export const metadata:Metadata = {
  title: "Stroyka-store - Бренды"
};

export default function BrandsPage(): JSX.Element {
  return (
    <>
      <main>
        <AllBrands />
        <PopularBrends />
      </main>
      ;
    </>
  );
}
