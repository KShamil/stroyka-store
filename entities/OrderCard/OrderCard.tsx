import React, { FC } from "react";
import { OrderCardProps } from "./OrderCard.props";
import Image from 'next/image';
import styles from './OrderCard.module.css';

export const OrderCard: FC<OrderCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { icon, text } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Image src={icon} alt='error' width={80} height={80}/>
        <p>{text}</p>
      </div>
    </>
  );
};
