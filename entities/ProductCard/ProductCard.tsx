"use client";

import React, { FC, useState } from "react";
import { ProductCardProps } from "./ProductCard.props";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Button } from "@/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/slice/cartSlice";
import { ButtonGroup } from "@/shared/ButtonGroup/ButtonGroup";
import { RootState } from "@/store/store";
import Link from "next/link";

export const ProductCard: FC<ProductCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { id, img, title, price, link } = data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(data));
  };
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };
  const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);
  const handleActiveBtn = () => {
    setIsActiveBtn(true);
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const getItemQuantity = () => {
    const cartItem = cartItems.find((item) => item.id === data.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const button = isActiveBtn ? (
    <ButtonGroup className={styles.btnGroup}>
      <Button appearance="plus-btn" onClick={handleAddToCart}>
        +
      </Button>
      <Button appearance="main-card-result-btn">{getItemQuantity()}</Button>
      <Button appearance="minus-btn" onClick={() => handleRemoveFromCart(id)}>
        -
      </Button>
    </ButtonGroup>
  ) : (
    <Button
      className={styles.btn}
      appearance="cards-add-to-cart"
      onClick={() => {
        handleActiveBtn();
      }}
    >
      {link}
    </Button>
  );
  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.image}>
        <Link href={`/details/${id}`}>
          <Image src={img} alt="error" />
        </Link>
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}₽</span>
        {button}
      </div>
    </div>
  );
};
