import React, { FC } from "react";
import { SimilarProductsProps } from "./SimilarProducts.props";
import styles from "./SimilarProducts.module.css";
import { cardData } from "@/data/data";
import { ProductCard } from "@/entities/ProductCard/ProductCard";
import { Htag } from "@/shared/Htag/Htag";

export const SimilarProducts: FC<SimilarProductsProps> = ({
  ...props
}): JSX.Element => {
    const sliceData = cardData.slice(-4);
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <Htag tag="h2">Похожие товары</Htag>
        <div className={styles.content}>
          {sliceData &&
            sliceData.map((item) => <ProductCard key={item.id} data={item} />)}
        </div>
      </section>
    </>
  );
};
