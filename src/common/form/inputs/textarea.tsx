// see https://tailwindcss.com/docs/resize#resize-in-all-directions
// by default: full width with ability to resize vertically
import React from "react";

import { getClasses } from "./utils";
import { InputProps } from "./type";

const Textarea = ({
  value,
  onChange,
  //errors,
  disabled,
  placeholder,
}: InputProps<string>) => {
  const handleChange = (v: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = v.target;

    if (value === "") {
      return onChange(undefined);
    }

    return onChange(value);
  };
  return (
    <textarea
      className={`resize-y ${getClasses()}`}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Textarea;
