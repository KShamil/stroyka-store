import React, { FC } from "react";
import { CheckoutCardProps } from "./CheckoutCard.props";
import styles from "./CheckoutCard.module.css";
import { Button } from "@/shared/Button/Button";

export const CheckoutCard: FC<CheckoutCardProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.total}>
            <b>Итого</b>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <span>Количество товара</span>
              <span>3 шт.</span>
            </div>
            <div className={styles.item}>
              <span>Товаров на сумму</span>
              <span>3 160 ₽</span>
            </div>
            <div className={styles.item}>
              <span>Поставщик</span>
              <span>Аксон</span>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <Button appearance="checkout-btn">Оформить заказ</Button>
        </div>
      </div>
    </>
  );
};
