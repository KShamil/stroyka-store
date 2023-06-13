import React, { FC } from "react";
import { AllBrandsProps } from "./AllBrands.props";
import styles from "./AllBrands.module.css";
import Link from "next/link";
import { Htag } from '@/shared/Htag/Htag';

export const AllBrands: FC<AllBrandsProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.info}>
            <Link href="/" className={styles.link}>
              Главная → Доставка
            </Link>
            <Htag tag="h1">Все бренды</Htag>
          </div>
        </div>
      </section>
    </>
  );
};
