import React, { FC } from "react";
import { PopularCategoriesCardItemsProps } from "./PopularCategoriesCardItems.props";
import styles from "./PopularCategoriesCardItems.module.css";
import ArrowIcon from "./Icon.svg";
import { popularCategoriesData } from "@/data/data";
import { Htag } from '@/shared/Htag/Htag';
import { Button } from '@/shared/Button/Button';
import { PopularCategoriesCard } from '@/entities/PopularCategoriesCard/PopularCategoriesCard';


export const PopularCategoriesCardItems: FC<
  PopularCategoriesCardItemsProps
> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Htag tag="h2">Популярные категории</Htag>
            <Button appearance="all-stock" className={styles.btn}>
              Все категории
              <ArrowIcon className={styles.icon}/>
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
