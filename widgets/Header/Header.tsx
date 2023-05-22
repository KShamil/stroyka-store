import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { BottomHeader, MiddleHeader, TopHeader } from "@/entities";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
      </div>
    </header>
  );
};
