import React, { FC } from "react";
import { HomeSliderItemsProps } from "./HomeSliderItems.props";
import styles from "./HomeSliderItems.module.css";
import Image from "next/image";
import { Htag } from '@/shared/Htag/Htag';
import { Button } from '@/shared/Button/Button';



export const HomeSliderItems: FC<HomeSliderItemsProps> = ({
  data,
  ...props
}): JSX.Element => {
  const { img, title, descr, link } = data;
  return (
    <div {...props} className={styles.wrapper}>
      <div className={styles.content}>
        <Image src={img} alt="error" width={1360} height={420} priority={true}/>
        <div className={styles.title}>
          <Htag tag="h1">{title}</Htag>
        </div>
        <p className={styles.description}>{descr}</p>
        <Button appearance="slider-btn" className={styles.btn}>{link}</Button>
      </div>
    </div>
  );
};
