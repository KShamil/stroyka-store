import React, { FC } from "react";
import { StockCardsItemsProps } from "./StockCardsItems.props";
import styles from './StockCardsItems.module.css';
import { Button, Htag } from '@/shared';
import ArrowIcon from './Icon.svg';
import { stockCardData } from '@/data/data';
import { StockCard } from '@/entities';

export const StockCardsItems: FC<StockCardsItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.top}>
                <Htag tag='h2'>Акции</Htag>
                <Button appearance='all-stock'>
                    <span>Все акции</span>
                    <ArrowIcon/>
                </Button>
            </div>
            <div className={styles.bottom}>
                {stockCardData && stockCardData.map(item => (
                    <StockCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};
