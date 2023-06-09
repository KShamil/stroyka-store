import React, { FC } from "react";
import { FAQProps } from "./FAQ.props";
import styles from "./FAQ.module.css";
import { FaqAccordion } from '@/entities/FaqAccordion/FaqAccordion';
import { Htag } from '@/shared/Htag/Htag';


export const FAQ: FC<FAQProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.title}>
                <Htag tag='h2'>Часто задаваемые вопросы</Htag>
            </div>
            <div className={styles.faqs}>
                <FaqAccordion/>
            </div>
        </div>
      </section>
      ;
    </>
  );
};
