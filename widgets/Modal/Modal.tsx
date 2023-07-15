import React, { FC } from "react";
import { ModalProps } from "./Modal.prop";
import styles from "./Modal.module.css";

export const Modal: FC<ModalProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.modal}>
        
      </div>
    </>
  );
};
