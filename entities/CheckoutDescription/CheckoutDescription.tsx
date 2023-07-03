import React, { FC } from "react";
import { CheckoutDescriptionProps } from "./CheckoutDescription.props";
import styles from "./CheckoutDescription.module.css";
import InfoIcon from './info.png';
import CarIcon from "./Icon.png";
import BoxIcon from "./box.png";
import Image from 'next/image';

export const CheckoutDescription: FC<CheckoutDescriptionProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.info}>
          <Image src={InfoIcon} alt='error' className={styles.icon}/>
          <span>Можно сделать заказ только от одного поставщика</span>
        </div>
        <div className={styles.info}>
        <Image src={CarIcon} alt='error' className={styles.icon}/>
          <span>Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</span>
        </div>
        <div className={styles.info}>
        <Image src={BoxIcon} alt='error' className={styles.icon}/>
          <span>Точная сумма доставки будет определена после после подтверждения заказа</span>
        </div>
      </div>
    </>
  );
};
