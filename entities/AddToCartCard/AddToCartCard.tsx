import React, { FC } from "react";
import { AddToCartCardProps } from "./AddToCartCard.props";
import styles from "./AddToCartCard.module.css";
import Image from "next/image";
import { ButtonGroup } from "@/shared/ButtonGroup/ButtonGroup";
import { Button } from "@/shared/Button/Button";
import Img from '../../data/images/card-img/Image (1).png'

export const AddToCartCard: FC<AddToCartCardProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={Img} alt="error" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <p>
              Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
            </p>
            <span>Код товара: <br /> 34078988-0047</span>
          </div>
          <div className={styles.price}>
            <b>449 ₽</b>
          </div>
          <div className={styles.buttons}>
            <ButtonGroup className={styles.addCartBtn}>
              <Button appearance="plus-btn">+</Button>
              <Button appearance="result-btn">99</Button>
              <Button appearance="minus-btn">-</Button>
            </ButtonGroup>
            <Button appearance="delete-btn">Удалить товар</Button>
          </div>
        </div>
      </div>
    </>
  );
};
