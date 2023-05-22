import React, { FC } from 'react'
import { InputGroupProps } from './InputGroup.props'
import styles from './InputGroup.module.css';

export const InputGroup:FC<InputGroupProps> = ({children,...props}):JSX.Element => {
  return (
    <div {...props} className={styles.wrapper}>
        {children}
    </div>
  )
}