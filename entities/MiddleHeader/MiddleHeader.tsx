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
import { ProfileModal } from "@/features/ProfileModal/ProfileModal";

export const MiddleHeader: FC<MiddleHeaderProps> = ({
  ...props
}): JSX.Element => {
  const [openModal,setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(prev => prev = !prev);
  }
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LogoIcon className={styles.logo} />
          </div>
          <div className={styles.right}>
            <Button appearance="cataloq-btn">
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
            <Link href="" className={styles.profile} onClick={handleOpenModal}>
              <ProfileIcon className={styles.profileIcon} />
              <span>Профиль</span>
            </Link>
            <Link href="/orders" className={styles.orders}>
              <OrdersIcon className={styles.ordersIcon} />
              <span>Заказы</span>
            </Link>
            <Link href="/cart" className={styles.cart}>
              <CartIcon className={styles.cartIcon} />
              <span>Корзина</span>
            </Link>
          </div>
        </div>
        {openModal && <ProfileModal className={styles.modal}/>}
      </div>
    </>
  );
};
