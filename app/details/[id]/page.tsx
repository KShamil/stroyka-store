"use client";

import { cardData } from "@/data/data";
import styles from "./Details.module.css";
import { DetailsCard } from "@/entities/DetailsCard/DetailsCard";
import { DetailsDescription } from "@/features/DetailsDescription/DetailsDescription";
import { SimilarProducts } from "@/widgets/SimilarProducts/SimilarProducts";

interface DetailsProps {
  params: { id: string };
}

export default function DetailsPage({
  params: { id },
}: DetailsProps): JSX.Element {
  const data = cardData.find((item) => item.id === id);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>
          {data && (
            <>
              <DetailsCard key={data.id} data={data} />
              <DetailsDescription />
              <SimilarProducts />
            </>
          )}
        </section>
      </main>
    </>
  );
}
