import React, { FC } from "react";
import { PopularBrendsProps } from "./PopularBrends.props";
import { PopularBrendsItems } from '@/features';
import styles from './PopularBrends.module.css';

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
