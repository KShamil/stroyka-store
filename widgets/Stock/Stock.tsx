import React, { FC } from 'react'
import { StockProps } from './Stock.props'
import styles from './Stock.module.css';
import { StockCardsItems } from '@/features/StockCardsItems/StockCardsItems';

export const Stock:FC<StockProps> = ({...props}):JSX.Element => {
  return (
    <>
        <section {...props} className={styles.wrapper}>
            <StockCardsItems/>
        </section>
    </>
  )
}