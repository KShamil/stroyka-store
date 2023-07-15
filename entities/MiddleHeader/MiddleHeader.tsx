"use client";

import React, { FC, useState } from "react";
import { MiddleHeaderProps } from "./MiddleHeader.props";
import styles from "./MiddleHeader.module.css";
import LogoIcon from "./logo.svg";
import CataloqBtnIcon from "./cataloqIcon.svg";
import SeacrhIcon from "./searchIcon.svg";
import ProfileIcon from "./profileIcon.svg";
import OrdersIcon from "./ordersIcon.svg";
import CartIcon from "./basketIcon.svg";
import { Button } from "@/shared/Button/Button";
import { InputGroup } from "@/shared/InputGroup/InputGroup";
import { Input } from "@/shared/Input/Input";
import Link from "next/link";
import { ProfileModal } from "@/widgets/ProfileModal/ProfileModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const MiddleHeader: FC<MiddleHeaderProps> = ({
  ...props
}): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LogoIcon className={styles.logo} />
          </div>
          <div className={styles.right}>
            <Button appearance="cataloq-btn" className={styles.cataloqBtn}>
              <CataloqBtnIcon className={styles.cataloqIcon} />
              Каталог
            </Button>
            <InputGroup>
              <Input
                appearance="header-input"
                placeholder="Поиск"
                type="text"
              />
              <SeacrhIcon className={styles.searchIcon} />
            </InputGroup>
            <ProfileModal className={styles.modal} />
            <Link href="/orders" className={styles.orders}>
              <OrdersIcon className={styles.ordersIcon} />
              <span>Заказы</span>
            </Link>
            <Link href="/cart" className={styles.cart}>
              <CartIcon className={styles.cartIcon} />
              <span>Корзина</span>
              {totalItems > 0 && (
                <span className={styles.badge}>{totalItems}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
