import React, { FC } from "react";
import { PopularBrendsCardProps } from "./PopularBrendsCard.props";
import styles from "./PopularBrendsCard.module.css";
import Image from "next/image";

export const PopularBrendsCard: FC<PopularBrendsCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img} alt="error" className={styles.img} />
        </div>
      </div>
    </>
  );
};
