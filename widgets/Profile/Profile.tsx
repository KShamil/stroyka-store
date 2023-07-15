import React, { FC } from "react";
import { ProfileProps } from "./Profile.props";
import styles from "./Profile.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { PersonalArea } from "@/features/PersonalArea/PersonalArea";

export const Profile: FC<ProfileProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.wrapper}>
        <div className={styles.container}>
          <Htag tag="h1">Личный кабинет</Htag>
          <PersonalArea />
        </div>
      </section>
    </>
  );
};
