import React, { FC } from "react";
import { PopularCategoriesProps } from "./PopularCategories.props";
import styles from './PopularCategories.module.css';
import { PopularCategoriesCardItems } from '@/features/PopularCategoriesCardItems/PopularCategoriesCardItems';

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
