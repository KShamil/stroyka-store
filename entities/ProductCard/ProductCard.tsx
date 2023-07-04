"use client";

import React, { FC } from "react";
import { ProductCardProps } from "./ProductCard.props";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Button } from "@/shared/Button/Button";
import { useDispatch } from "react-redux";
import { addItem } from "@/slice/cartSlice";

export const ProductCard: FC<ProductCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img, title, price, link } = data;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  };

  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={img} alt="error" />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}₽</span>
        <Button
          className={styles.btn}
          appearance="cards-add-to-cart"
          onClick={handleAddItem}
        >
          {link}
        </Button>
      </div>
    </div>
  );
};
