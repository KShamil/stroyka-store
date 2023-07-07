"use client";

import { cardData } from "@/data/data";
import styles from "./Details.module.css";
import { DetailsCard } from "@/entities/DetailsCard/DetailsCard";
import { DetailsDescription } from "@/features/DetailsDescription/DetailsDescription";

type ParamsProps = {
  params: {
    id: string;
  };
};

export default function DetailsPage({
  params: { id },
}: ParamsProps): JSX.Element {
  const product = cardData.find((item) => item.id === id);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>
          {product && (
            <>
              <DetailsCard key={product.id} data={product} />
              <DetailsDescription />
            </>
          )}
          
        </section>
      </main>
    </>
  );
}
