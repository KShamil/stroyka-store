import React, { FC } from "react";
import { PopularCategoriesCardItemsProps } from "./PopularCategoriesCardItems.props";
import styles from "./PopularCategoriesCardItems.module.css";
import { Button, Htag } from "@/shared";
import ArrowIcon from "./Icon.svg";
import { popularCategoriesData } from "@/data/data";
import { PopularCategoriesCard } from "@/entities";

export const PopularCategoriesCardItems: FC<
  PopularCategoriesCardItemsProps
> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Htag tag="h2">Популярные категории</Htag>
            <Button appearance="all-stock">
              Все категории
              <ArrowIcon />
            </Button>
          </div>
          <div className={styles.bottom}>
            {popularCategoriesData &&
              popularCategoriesData.map((item) => (
                <PopularCategoriesCard key={item.id} data={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
