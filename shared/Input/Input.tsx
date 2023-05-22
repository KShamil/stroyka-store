import React, { FC } from 'react'
import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

export const Input:FC<InputProps> = ({className,appearance,...props}):JSX.Element => {
  return (
    <input {...props} className={cn(styles.input, className, {
        [styles.headerInput]:appearance == 'header-input'
    })}></input>
  )
}