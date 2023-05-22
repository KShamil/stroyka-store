import React, { FC } from "react";
import { PopularCategoriesCardProps } from "./PopularCategoriesCard.props";
import styles from "./PopularCategoriesCard.module.css";
import Image from "next/image";

export const PopularCategoriesCard: FC<PopularCategoriesCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { title, img } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <h6>{title}</h6>
        <Image src={img} alt={title} className={styles.img}/>
      </div>
    </>
  );
};
