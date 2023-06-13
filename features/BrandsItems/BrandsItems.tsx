import React, { FC } from "react";
import { BrandsItemsProps } from "./BrandsItems.props";
import styles from './BrandsItems.module.css';

export const BrandsItems: FC<BrandsItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>BrandsItems</div>
    </>
  );
};
