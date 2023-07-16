import React, { FC } from "react";
import { OrderBoxProps } from "./OrderBox.props";
import Image from 'next/image';
import styles from './OrderBox.module.css'

export const OrderBox: FC<OrderBoxProps> = ({
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
