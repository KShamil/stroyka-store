import React, { FC } from "react";
import { AddToCartProps } from "./AddToCart.props";
import styles from "./AddToCart.module.css";
import { CheckoutCard } from "@/entities/CheckoutCard/CheckoutCard";
import { AddToCartCard } from "@/entities/AddToCartCard/AddToCartCard";
import { CheckoutDescription } from "@/entities/CheckoutDescription/CheckoutDescription";

export const AddToCart: FC<AddToCartProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.checkoutBody}>
            <CheckoutCard />
            <CheckoutDescription />
          </div>
          <div className={styles.cardList}>
            <AddToCartCard />
            <AddToCartCard />
            <AddToCartCard />
          </div>
        </div>
      </section>
    </>
  );
};
