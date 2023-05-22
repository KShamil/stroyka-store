import React, { FC } from "react";
import { ReviewsCardProps } from "./ReviewsCard.props";
import styles from "./ReviewsCard.module.css";
import Image from "next/image";
import QuotesIcon from "./quotes.svg";

export const ReviewsCard: FC<ReviewsCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img, name, reviews, date } = data;
  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.avatar}>
          <Image src={img} alt={name} />
          <span>{name}</span>
        </div>
        <QuotesIcon className={styles.quotes} />
      </div>
      <div className={styles.reviews}>
        <p>{reviews}</p>
      </div>
      <div className={styles.date}>
        <span>{date}</span>
      </div>
    </div>
  );
};
