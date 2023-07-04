'use client'

import React, { FC } from "react";
import { AddToCartCardProps } from "./AddToCartCard.props";
import styles from "./AddToCartCard.module.css";
import Image from "next/image";
import { ButtonGroup } from "@/shared/ButtonGroup/ButtonGroup";
import { Button } from "@/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "@/slice/cartSlice";
import { RootState } from '@/store/store';

export const AddToCartCard: FC<AddToCartCardProps> = ({
  product,
  ...props
}): JSX.Element => {
  const { id, img, title, price } = product;
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.length
  return (
    <>
      <div {...props} className={styles.wrapper} key={id}>
        <div className={styles.image}>
          <Image src={img} alt="error" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <p>{title}</p>
            <span>
              Код товара: <br /> 34078988-0047
            </span>
          </div>
          <div className={styles.price}>
            <b>{price}</b>
          </div>
          <div className={styles.buttons}>
            <ButtonGroup className={styles.addCartBtn}>
              <Button appearance="plus-btn">+</Button>
              <Button appearance="result-btn">{totalItems}</Button>
              <Button appearance="minus-btn">-</Button>
            </ButtonGroup>
            <Button
              appearance="delete-btn"
              onClick={() => handleRemoveFromCart(id)}
            >
              Удалить товар
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
