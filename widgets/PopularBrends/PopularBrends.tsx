import React, { FC } from "react";
import styles from './PopularBrends.module.css';
import { PopularBrendsItems } from '@/features/PopularBrendsItems/PopularBrendsItems';
import { PopularBrendsProps } from './PopularBrends.props';

export const PopularBrends: FC<PopularBrendsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <PopularBrendsItems/>
      </section>
    </>
  );
};
