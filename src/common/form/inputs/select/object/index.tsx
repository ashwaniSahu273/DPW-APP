import React from "react";

import Scalar from "../scalar";
import { SelectOptionSetProps } from "../../type";

const SelectObject = <A,>({
  options,
  value,
  onChange,
  dark,
}: SelectOptionSetProps<A>) => {
  const handleChange = (v?: A) => {
//    console.log(`SelectObject->handleChange: `+v);
    if (v === undefined) {
      onChange(undefined);
      return;
    }

    const f = options.find((o) => o.id === v);

    if (f) {
      onChange(f);
    }
  };

  const v = value && value.id;
  return (
    <Scalar<A>
      options={options}
      value={v}
      onChange={handleChange}
      dark={dark}
    />
  );
};

export default SelectObject;
