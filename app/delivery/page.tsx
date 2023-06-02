import { AboutDelivery } from '@/widgets/AboutDelivery/AboutDelivery';
import { FAQ } from '@/widgets/FAQ/FAQ';
import { MakeAnOrder } from '@/widgets/MakeAnOrder/MakeAnOrder';
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
