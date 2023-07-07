'use client'

import React, { FC } from "react";
import { DetailsCardProps } from "./DetailsCard.props";
import styles from "./DetailsCard.module.css";
import Image from "next/image";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import { ButtonGroup } from "@/shared/ButtonGroup/ButtonGroup";
import CheckIcon from "./check-circle.png";
import CarIcon from "./car.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/slice/cartSlice";
import { RootState } from "@/store/store";

export const DetailsCard: FC<DetailsCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { id, img, title, discount, price, link } = data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
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
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img} alt={title} className={styles.img} />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <Htag tag="h2">{title}</Htag>
            <div className={styles.status}>
              <Image src={CheckIcon} alt="error" />
              <span>В наличии</span>
            </div>
            <b className={styles.price}>{price} ₽</b>
          </div>
          <div className={styles.buttons}>
            <Button appearance="cards-add-to-cart" onClick={handleAddToCart}>{link}</Button>
            <ButtonGroup className={styles.btn}>
              <Button appearance="plus-btn" onClick={handleAddToCart}>
                +
              </Button>
              <Button appearance="details-result-btn">
                {getItemQuantity()}
              </Button>
              <Button
                appearance="minus-btn"
                onClick={() => handleRemoveFromCart(id)}
              >
                -
              </Button>
            </ButtonGroup>
          </div>
          <div className={styles.text}>
            <span>Поставщик: Аксон</span>
            <div className={styles.descr}>
              <Image src={CarIcon} alt="error" />
              <p>
                Доставка осуществляется курьерами поставщика или службой
                курьеров Достависта. Также товар можно забрать самостоятельно от
                поставщика
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
