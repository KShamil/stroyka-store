import React, { FC } from "react";
import { ReviewsProps } from "./Reviews.props";
import styles from './Reviews.module.css';
import { ReviewsCardItems } from '@/features/ReviewsCardItems/ReviewsCardItems';

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
