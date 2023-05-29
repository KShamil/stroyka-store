import React, { FC } from "react";
import { DocumentationCardProps } from "./DocumentationCard.props";
import styles from "./DocumentationCard.module.css";
import Image from "next/image";
import { Button } from "@/shared";

export const DocumentationCard: FC<DocumentationCardProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img, title, file, link } = data;
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img} alt="error" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h5>{title}</h5>
            <span>{file}</span>
          </div>
          <Button appearance="documentation-card-btn" className={styles.btn}>
            {link}
          </Button>
        </div>
      </div>
    </>
  );
};
