import React, { FC } from "react";
import { CataloqItemsProps } from "./CataloqItems.props";
import styles from "./CataloqItems.module.css";
import { cardData } from '@/data/data';
import { ProductCard } from '@/entities/ProductCard/ProductCard';

export const CataloqItems: FC<CataloqItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        {cardData && cardData.map(item => (
            <ProductCard key={item.id} data={item}/>
        ))}
      </div>
    </>
  );
};
