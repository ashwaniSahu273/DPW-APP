import React from "react";
import * as T from "./type";
import { getClasses } from "./utils";

export const InputText = ({
  value,
  onChange,
  disabled,
  placeholder,
  errors,
}: T.InputProps<number>) => {
  return (
    <input
      className={getClasses(errors)}
      disabled={disabled}
      type="number"
      value={value || ""}
      placeholder={placeholder}
      onChange={(v) => {
        if (v.target.value === "") {
          return onChange(undefined);
        }

        const n = Number(v.target.value);

        if (isNaN(n)) {
          return onChange(undefined);
        }
        onChange(n);
      }}
    />
  );
};

export default InputText;
