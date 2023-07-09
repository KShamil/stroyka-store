import React, { FC } from "react";
import { StockCardsItemsProps } from "./StockCardsItems.props";
import styles from './StockCardsItems.module.css';
import ArrowIcon from './Icon.svg';
import { cardData } from '@/data/data';
import { Htag } from '@/shared/Htag/Htag';
import { Button } from '@/shared/Button/Button';
import { StockCard } from '@/entities/StockCard/StockCard';


export const StockCardsItems: FC<StockCardsItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.top}>
                <Htag tag='h2'>Акции</Htag>
                <Button appearance='all-stock' className={styles.btn}>
                    <span>Все акции</span>
                    <ArrowIcon className={styles.icon}/>
                </Button>
            </div>
            <div className={styles.bottom}>
                {cardData && cardData.filter(item => item.discount !== '').slice(0,4).map(item => (
                  <StockCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};
