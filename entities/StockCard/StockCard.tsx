"use client";

import React, { FC, useState } from "react";
import { StockCardProps } from "./StockCard.props";
import styles from "./StockCard.module.css";
import Image from "next/image";
import { Button } from "@/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/slice/cartSlice";
import Link from "next/link";
import { RootState } from "@/store/store";
import { ButtonGroup } from "@/shared/ButtonGroup/ButtonGroup";

export const StockCard: FC<StockCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { id, img, title, price, discount, link } = data;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  };
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const getItemQuantity = () => {
    const cartItem = cartItems.find((item) => item.id === data.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const [activeBtn, setActiveBtn] = useState<boolean>(false);

  const handleActiveBtn = () => {
    setActiveBtn(true);
  };

  const button = activeBtn ? (
    <ButtonGroup className={styles.groupBtn}>
      <Button appearance="plus-btn" onClick={handleAddItem}>+</Button>
      <Button appearance="stock-result-btn">{getItemQuantity()}</Button>
      <Button appearance="minus-btn" onClick={() => handleRemoveFromCart(id)}>-</Button>
    </ButtonGroup>
  ) : (
    <Button
      appearance="stock-add-to-cart"
      className={styles.btn}
      onClick={handleActiveBtn}
    >
      {link}
    </Button>
  );

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
          {button}
        </div>
      </div>
    </>
  );
};
