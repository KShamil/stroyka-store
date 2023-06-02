"use client";

import React, { FC, useState } from "react";
import { PopularGoodsItemsProps } from "./PopularGoodsItems.props";
import styles from "./PopularGoodsItems.module.css";
import { cardData } from "@/data/data";
import { ProductCard } from '@/entities/ProductCard/ProductCard';
import { Button } from '@/shared/Button/Button';


export const PopularGoodsItems: FC<PopularGoodsItemsProps> = ({
  ...props
}): JSX.Element => {
  const [displayedProducts, setDisplayedProducts] = useState<number>(8);

  const LoadMoreProducts = (): void => {
    setDisplayedProducts(displayedProducts + 4);
  };
  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        {cardData &&
          cardData
            .slice(0, displayedProducts)
            .map((item) => <ProductCard key={item.id} data={item} />)}
      </div>
      {displayedProducts < cardData.length && (
        <Button appearance="load-more-btn" onClick={LoadMoreProducts}>Показать еще</Button>
      )}
    </div>
  );
};
