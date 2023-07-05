import React, { FC } from "react";
import { PopularBrendsItemsProps } from "./PopularBrendsItems.props";
import styles from "./PopularBrendsItems.module.css";
import ArrowIcon from "./Icon.svg";
import { popularBrendsData } from '@/data/data';
import { Htag } from '@/shared/Htag/Htag';
import { Button } from '@/shared/Button/Button';
import { PopularBrendsCard } from '@/entities/PopularBrendsCard/PopularBrendsCard';

export const PopularBrendsItems: FC<PopularBrendsItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Htag tag="h2">Популярные бренды</Htag>
            <Button appearance="all-stock" className={styles.btn}>
              Все бренды
              <ArrowIcon className={styles.icon}/>
            </Button>
          </div>
          <div className={styles.bottom}>
            {popularBrendsData && popularBrendsData.map((item, i) => (
                <PopularBrendsCard key={i}  data={item}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
