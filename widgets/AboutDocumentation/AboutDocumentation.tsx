import React, { FC } from "react";
import { AboutDocumentationProps } from "./AboutDocumentation.props";
import styles from "./AboutDocumentation.module.css";
import { DocumentationCardItems } from "@/features";

export const AboutDocumentation: FC<AboutDocumentationProps> = ({
  ...props
}): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <DocumentationCardItems />
      </section>
      ;
    </>
  );
};
