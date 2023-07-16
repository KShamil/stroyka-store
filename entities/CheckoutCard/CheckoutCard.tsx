import React, { FC } from "react";
import { CheckoutCardProps } from "./CheckoutCard.props";
import styles from "./CheckoutCard.module.css";
import { Button } from "@/shared/Button/Button";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItems } from "@/slice/cartSlice";
import { addOrderItems } from "@/slice/ordersSlice";
import { useRouter } from "next/navigation";

export const CheckoutCard: FC<CheckoutCardProps> = ({
  ...props
}): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCheckOutClick = () => {
    dispatch(addOrderItems(cartItems));
    cartItems.forEach((item) => dispatch(removeAllItems(item.id)));
    router.push("/orders");
  };
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
              <span>{totalItems} шт.</span>
            </div>
            <div className={styles.item}>
              <span>Товаров на сумму</span>
              <span>{totalPrice} ₽</span>
            </div>
            <div className={styles.item}>
              <span>Поставщик</span>
              <span>Аксон</span>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <Button appearance="checkout-btn" onClick={handleCheckOutClick}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};
