import * as React from "react";
import { InputBase, type InputBaseProps } from "../input-base";
export interface InputProps extends InputBaseProps {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <InputBase ref={ref} {...props} />;
  },
);

Input.displayName = "Input";
