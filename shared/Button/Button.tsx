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
        [styles.documentationCardBtn]:appearance == 'documentation-card-btn',
        [styles.notFoundBtn]:appearance == 'not-found-btn',
        [styles.plusBtn]:appearance == 'plus-btn',
        [styles.minusBtn]:appearance == 'minus-btn',
        [styles.deleteBtn]:appearance == 'delete-btn',
        [styles.resultBtn]:appearance == 'result-btn',
        [styles.stockResultBtn]:appearance == 'stock-result-btn',
        [styles.checkoutBtn]:appearance == 'checkout-btn',
        [styles.mainCardResultBtn]:appearance == 'main-card-result-btn',
        [styles.detailsResultBtn]:appearance == 'details-result-btn',
        [styles.createBtn]:appearance == 'create-btn',
        [styles.signInBtn]:appearance == 'sign-in-btn',
        [styles.saveBtn]:appearance == 'save-btn',
      })}
    ></button>
  );
};
