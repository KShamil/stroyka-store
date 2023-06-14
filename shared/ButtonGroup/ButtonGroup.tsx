import React, { FC } from "react";
import { ButtonGroupProps } from "./ButtonGroup.priops";

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <div {...props}>{children}</div>;
};
