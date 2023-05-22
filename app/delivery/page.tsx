import { AboutDelivery, FAQ, MakeAnOrder } from "@/widgets";

export default function DeliveryPage(): JSX.Element {
  return (
    <main>
      <AboutDelivery />
      <MakeAnOrder/>
      <FAQ/>
    </main>
  );
}
