import React, { FC } from 'react'
import { StockProps } from './Stock.props'
import { StockCardsItems } from '@/features'
import styles from './Stock.module.css';

export const Stock:FC<StockProps> = ({...props}):JSX.Element => {
  return (
    <>
        <section {...props} className={styles.wrapper}>
            <StockCardsItems/>
        </section>
    </>
  )
}