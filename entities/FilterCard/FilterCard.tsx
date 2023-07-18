import React, { FC } from "react";
import { FilterCardProps } from "./FilterCard.props";
import styles from "./FilterCard.module.css";
import { Input } from "@/shared/Input/Input";
import { Button } from '@/shared/Button/Button';


export const FilterCard: FC<FilterCardProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.top}>
          <label htmlFor="">Цена</label>
          <div className={styles.inputsGroup}>
            <Input
              appearance="info-input"
              type="number"
              placeholder="1000"
            ></Input>
            <Input
              appearance="info-input"
              type="number"
              placeholder="100000"
            ></Input>
          </div>
          <input type="range" className={styles.range} />
        </div>
        <div className={styles.middle}>
            <div className={styles.brand}>
                <label htmlFor=""><b>Бренд</b></label>
                <Input appearance='info-input' type='text' placeholder='Поиск'></Input>
            </div>
            <div className={styles.checkboxes}>
                <div className={styles.checkboxInput}>
                    <input type="checkbox" />
                    <label htmlFor="">Braer</label>
                </div>
                <div className={styles.checkboxInput}>
                    <input type="checkbox" />
                    <label htmlFor="">Mstera</label>
                </div>
                <div className={styles.checkboxInput}>
                    <input type="checkbox" />
                    <label htmlFor="">Euroblock</label>
                </div>
                <div className={styles.checkboxInput}>
                    <input type="checkbox" />
                    <label htmlFor="">Гален</label>
                </div>
                <div className={styles.checkboxInput}>
                    <input type="checkbox" />
                    <label htmlFor="">ЛСР</label>
                </div>
                <div className={styles.checkboxInput}>
                    <input type="checkbox" />
                    <label htmlFor="">Decra</label>
                </div>
            </div>
            <div className={styles.provider}>
                <label htmlFor=""></label>
                <Input appearance='info-input' type='text' placeholder='Аксон'></Input>
            </div>
        </div>
        <div className={styles.bottom}>
            <Button appearance='yellow-btn'>Применить</Button>
            <Button appearance='white-btn'>Сбросить</Button>
        </div>
      </div>
    </>
  );
};
