import React, { FC } from "react";
import { PopularCategoriesProps } from "./PopularCategories.props";
import { PopularCategoriesCardItems } from '@/features';
import styles from './PopularCategories.module.css';

export const PopularCategories: FC<PopularCategoriesProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <PopularCategoriesCardItems/>
      </section>
    </>
  );
};
