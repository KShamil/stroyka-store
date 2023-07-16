import React, { FC } from "react";
import { MakeAnOrderItemsProps } from "./MakeAnOrderItems.props";
import styles from "./MakeAnOrderItems.module.css";
import { orderCardData } from "@/data/data";
import { Htag } from '@/shared/Htag/Htag';
import { OrderBox } from '@/entities/OrderBox/OrderBox';


export const MakeAnOrderItems: FC<MakeAnOrderItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Htag tag="h2">Как сделать заказ: 4 простых шага</Htag>
          </div>
          <div className={styles.bottom}>
            {orderCardData &&
              orderCardData.map((item) => (
                <OrderBox key={item.id} data={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
