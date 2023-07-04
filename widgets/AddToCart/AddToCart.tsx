"use client";

import React, { FC } from "react";
import { AddToCartProps } from "./AddToCart.props";
import styles from "./AddToCart.module.css";
import { CheckoutCard } from "@/entities/CheckoutCard/CheckoutCard";
import { AddToCartCard } from "@/entities/AddToCartCard/AddToCartCard";
import { CheckoutDescription } from "@/entities/CheckoutDescription/CheckoutDescription";
import { addItem, removeItem } from "@/slice/cartSlice";
import { ICardData } from "@/interfaces/interfaces";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const AddToCart: FC<AddToCartProps> = ({ ...props }): JSX.Element => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (item: ICardData) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.checkoutBody}>
            <CheckoutCard />
            <CheckoutDescription />
          </div>
          <div className={styles.cardList}>
            {items.map((item) => (
              <AddToCartCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
