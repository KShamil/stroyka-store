import React, { FC } from "react";
import { ButtonGroupProps } from "./ButtonGroup.props";

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <div {...props}>{children}</div>;
};
