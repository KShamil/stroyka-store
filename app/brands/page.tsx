import { AllBrands } from "@/widgets/AllBrands/AllBrands";
import { PopularBrends } from "@/widgets/PopularBrends/PopularBrends";
import React from "react";

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
