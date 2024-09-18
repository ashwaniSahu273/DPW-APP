import React from "react";
import * as T from "./type";
import { getClasses } from "./utils";

export const InputText = ({
  value,
  onChange,
  disabled,
  placeholder,
  errors,
  dark,
}: T.InputProps<string>) => {
  return (
    <input
      className={getClasses(errors, dark)}
      disabled={disabled}
      type="text"
      value={value || ""}
      placeholder={placeholder}
      required
      onChange={(v) =>
        v.target.value === "" ? onChange(undefined) : onChange(v.target.value)
      }
    />
  );
};

export default InputText;
