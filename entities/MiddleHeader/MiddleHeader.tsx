import React, { FC } from "react";
import { MiddleHeaderProps } from "./MiddleHeader.props";
import styles from "./MiddleHeader.module.css";
import LogoIcon from "./logo.svg";
import CataloqBtnIcon from "./cataloqIcon.svg";
import SeacrhIcon from './searchIcon.svg';
import ProfileIcon from './profileIcon.svg';
import OrdersIcon from './ordersIcon.svg';
import CartIcon from './basketIcon.svg';
import { Button } from '@/shared/Button/Button';
import { InputGroup } from '@/shared/InputGroup/InputGroup';
import { Input } from '@/shared/Input/Input';
import Link from 'next/link';


export const MiddleHeader: FC<MiddleHeaderProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LogoIcon className={styles.logo}/>
          </div>
          <div className={styles.right}>
            <Button appearance='cataloq-btn'>
              <CataloqBtnIcon  className={styles.cataloqIcon}/>
              Каталог
            </Button>
            <InputGroup>
                <Input appearance='header-input' placeholder='Поиск' type='text'/>
                <SeacrhIcon className={styles.searchIcon}/>
            </InputGroup>
            <Link href="/profile" className={styles.profile}>
                <ProfileIcon className={styles.profileIcon}/>
                <span>Профиль</span>
            </Link>
            <Link href="/orders" className={styles.orders}>
                <OrdersIcon className={styles.ordersIcon}/>
                <span>Заказы</span>
            </Link>
            <Link href="/cart" className={styles.cart}>
                <CartIcon className={styles.cartIcon}/>
                <span>Корзина</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
