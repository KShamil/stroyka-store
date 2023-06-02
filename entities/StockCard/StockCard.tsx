import React, { FC } from "react";
import { StockCardProps } from "./StockCard.props";
import styles from "./StockCard.module.css";
import Image from "next/image";
import { Button } from '@/shared/Button/Button';

export const StockCard: FC<StockCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img, title, price, discount, link } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.left}>
          <Image src={img} alt={title} />
          <div className={styles.badge}>-25%</div>
        </div>
        <div className={styles.right}>
          <h6 className={styles.title}>{title}</h6>
          <div className={styles.price}>
            <span className={styles.currentPrice}>{price}</span>
            <span className={styles.discount}>{discount}</span>
          </div>
          <Button appearance="stock-add-to-cart" className={styles.btn}>{link}</Button>
        </div>
      </div>
    </>
  );
};
