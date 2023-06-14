import React, { FC } from "react";
import { AddToCartCardProps } from "./AddToCartCard.props";
import styles from './AddToCartCard.module.css';
import Image from 'next/image';

export const AddToCartCard: FC<AddToCartCardProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={""} alt='error'/>
            </div>
            <div className={styles.info}>
                
            </div>
      </div>
    </>
  );
};
