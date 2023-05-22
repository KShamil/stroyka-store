import {
  AboutCompany,
  HomeSlider,
  PopularBrends,
  PopularCategories,
  PopularGoods,
  Reviews,
  Stock,
} from "@/widgets";
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Stroyka-store - Магазин стройматериалов",
  description: "Generated by create next app",
};

export default function Home(): JSX.Element {
  return (
    <main>
      <HomeSlider />
      <Stock />
      <PopularCategories />
      <PopularGoods />
      <PopularBrends />
      <Reviews />
      <AboutCompany />
    </main>
  );
}
