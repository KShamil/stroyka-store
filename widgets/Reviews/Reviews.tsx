import React, { FC } from "react";
import { ReviewsProps } from "./Reviews.props";
import { ReviewsCardItems } from "@/features";
import styles from './Reviews.module.css';

export const Reviews: FC<ReviewsProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <ReviewsCardItems />
      </section>
      ;
    </>
  );
};
