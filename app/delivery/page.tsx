import { AboutDelivery, FAQ, MakeAnOrder } from "@/widgets";
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Доставка",
};

export default function DeliveryPage(): JSX.Element {
  return (
    <main>
      <AboutDelivery />
      <MakeAnOrder/>
      <FAQ/>
    </main>
  );
}
