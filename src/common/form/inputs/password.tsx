import React, { useState } from "react";
import * as T from "./type";
import { getClasses } from "./utils";

const iconClasses = `absolute right-2 top-3 text-secondary-400 hover:text-secondary-500 cursor-pointer `;
export const InputText = ({
  value,
  onChange,
  disabled,
  placeholder,
  errors,
}: T.InputProps<string>) => {
  const [show, setShow] = useState<boolean>(false);
  const IconShow = (
    <i
      className={`fa-solid fa-eye ${iconClasses}`}
      onClick={() => setShow(true)}
    ></i>
  );
  const IconHode = (
    <i
      className={`fa-solid fa-eye-slash ${iconClasses}`}
      onClick={() => setShow(false)}
    ></i>
  );
  return (
    <div className="relative">
      <input
        className={`${getClasses(errors)}`}
        disabled={disabled}
        type={show ? "text" : "password"}
        value={value || ""}
        placeholder={placeholder}
        onChange={(v) =>
          v.target.value === "" ? onChange(undefined) : onChange(v.target.value)
        }
      />
      {show ? IconHode : IconShow}
    </div>
  );
};

export default InputText;
