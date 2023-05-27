import React, { FC } from "react";
import { AboutRefundProps } from "./AboutRefund.props";
import styles from "./AboutRefund.module.css";
import { Htag } from "@/shared";
import Link from "next/link";

export const AboutRefund: FC<AboutRefundProps> = ({
  ...props
}): JSX.Element => {
  return (
    <section {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Link href="/" className={styles.link}>
            Главная → Возврат
          </Link>
          <Htag tag="h1">Возврат</Htag>
          <p>
            ДОшиблись при выборе товара? Передумали? Ничего страшного!
            СтройкаСтор в течение 7 дней готова принять обратно или обменять Ваш
            товар
          </p>
        </div>
      </div>
    </section>
  );
};
