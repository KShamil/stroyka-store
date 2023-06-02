import React, { FC } from "react";
import { ProductCardProps } from "./ProductCard.props";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Button } from '@/shared/Button/Button';


export const ProductCard: FC<ProductCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img, title, price, link } = data;

  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={img} alt="error" />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}₽</span>
        <Button className={styles.btn} appearance="cards-add-to-cart">{link}</Button>
      </div>
    </div>
  );
};
