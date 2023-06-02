import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { TopHeader } from '@/entities/TopHeader/TopHeader';
import { MiddleHeader } from '@/entities/MiddleHeader/MiddleHeader';
import { BottomHeader } from '@/entities/BottomHeader/BottomHeader';


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
