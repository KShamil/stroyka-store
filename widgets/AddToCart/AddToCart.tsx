"use client";

import React, { FC, useEffect } from "react";
import { AddToCartProps } from "./AddToCart.props";
import styles from "./AddToCart.module.css";
import { CheckoutCard } from "@/entities/CheckoutCard/CheckoutCard";
import { AddToCartCard } from "@/entities/AddToCartCard/AddToCartCard";
import { CheckoutDescription } from "@/entities/CheckoutDescription/CheckoutDescription";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Htag } from "@/shared/Htag/Htag";

export const AddToCart: FC<AddToCartProps> = ({ ...props }): JSX.Element => {
  const items = useSelector((state: RootState) => state.cart.items);

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <Htag tag="h1">
          Корзина пустая, <br /> пожалуйста добавьте товар в корзину
        </Htag>
      </div>
    );
  }
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
