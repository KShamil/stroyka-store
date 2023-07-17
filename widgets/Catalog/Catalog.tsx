import React, { FC } from "react";
import { CatalogProps } from "./Catalog.props";
import styles from "./Catalog.module.css";
import Link from "next/link";
import { Htag } from "@/shared/Htag/Htag";
import { CataloqItems } from "@/features/CataloqItems/CataloqItems";

export const Catalog: FC<CatalogProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.title}>
          <Link href="/">Главная → Каталог</Link>
          <Htag tag="h1">Каталог</Htag>
        </div>
        <div className={styles.content}>
          <CataloqItems />
        </div>
      </section>
    </>
  );
};
