import React, { FC } from "react";
import { MakeAnOrderProps } from "./MakeAnOrder.props";
import styles from "./MakeAnOrder.module.css";
import { MakeAnOrderItems } from "@/features/MakeAnOrderItems/MakeAnOrderItems";

export const MakeAnOrder: FC<MakeAnOrderProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <MakeAnOrderItems />
      </section>
    </>
  );
};
