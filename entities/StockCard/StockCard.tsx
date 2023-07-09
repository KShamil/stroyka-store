"use client";

import React, { FC } from "react";
import { StockCardProps } from "./StockCard.props";
import styles from "./StockCard.module.css";
import Image from "next/image";
import { Button } from "@/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/slice/cartSlice";
import Link from "next/link";
import { RootState } from '@/store/store';

export const StockCard: FC<StockCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { id, img, title, price, discount, link } = data;
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === data.id);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  };

  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Link href={`/details/${id}`} className={styles.left}>
          <Image src={img} alt={title} />
          <div className={styles.badge}>-25%</div>
        </Link>
        <div className={styles.right}>
          <h6 className={styles.title}>{title}</h6>
          <div className={styles.price}>
            <span className={styles.currentPrice}>{price}</span>
            <span className={styles.discount}>{discount}</span>
          </div>
          <Button
            appearance="stock-add-to-cart"
            className={styles.btn}
            onClick={handleAddItem}
          >
            {link}
          </Button>
        </div>
      </div>
    </>
  );
};
