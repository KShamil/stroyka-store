import React, { FC } from "react";
import { PopularGoodsProps } from "./PopularGoods.props";
import { PopularGoodsItems } from "@/features";
import styles from "./PopularGoods.module.css";
import { Htag } from "@/shared";

export const PopularGoods: FC<PopularGoodsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <section {...props} className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h2">Популярные товары</Htag>
      </div>
      <PopularGoodsItems />
    </section>
  );
};
