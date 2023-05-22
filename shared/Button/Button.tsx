import React, { FC } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button: FC<ButtonProps> = ({ className,appearance,...props }): JSX.Element => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.cataloqBtn]: appearance == "cataloq-btn",
        [styles.moreBtn]: appearance == 'more-btn',
        [styles.cardsAddToCartBtn]: appearance == 'cards-add-to-cart',
        [styles.stockAddToCartBtn]:appearance == 'stock-add-to-cart',
        [styles.allStockBtn]:appearance == 'all-stock',
        [styles.sliderBtn]:appearance == 'slider-btn',
        [styles.loadMoreBtn]:appearance == 'load-more-btn',
      })}
    ></button>
  );
};
