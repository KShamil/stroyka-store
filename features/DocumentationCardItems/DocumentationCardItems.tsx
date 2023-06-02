import React, { FC } from "react";
import { DocumentationCardItemsProps } from "./DocumentationCardItems.props";
import styles from "./DocumentationCardItems.module.css";
import Link from "next/link";
import { documentationCardData } from "@/data/data";
import { Htag } from "@/shared/Htag/Htag";
import { DocumentationCard } from "@/entities/DocumentationCard/DocumentationCard";
export const DocumentationCardItems: FC<DocumentationCardItemsProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            <Link href="/">Главная → Документация</Link>
            <Htag tag="h1">Документация</Htag>
          </div>
          <div className={styles.bottom}>
            {documentationCardData &&
              documentationCardData.map((item) => (
                <DocumentationCard key={item.id} data={item} />
              ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
};
