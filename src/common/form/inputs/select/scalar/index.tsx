import React, { useState } from "react";
import * as T from "../../type";
import ChevronAnimated from "../../../../components/chevron";

import Menu from "./menu";
import { getClasses } from "../../utils";

export const Select = <A,>({
  options,
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled,
  dark,
}: T.SelectProps<A>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>("");
  
  const displayValue =
    value === undefined ? undefined : options.find((o) => o.id === value);

  const handleChange = (a: A | undefined) => {
//    console.log(`Select->handleChange: `+a);
    setOpen(false);

    setSearchString("");
    return onChange(a);
  };

  return (
    <div className="relative">
      <input
        onChange={(e) => setSearchString(e.currentTarget.value)}
        onClick={() => setOpen(!open)}
        value={
          searchString !== ""
            ? searchString
            : displayValue
            ? displayValue.name
            : ""
        }
        disabled={disabled}
        className={getClasses(errors, dark)}
      />
      
      {displayValue && (
          <button 
            className="absolute right-9 top-2 width-10 opacity-100 inline transition-all duration-500 hover:opacity-60"
            type="button"
            onClick={() => {
//              console.log(`Select->X_Button->OnClick-1`);
              setSearchString(""); 
              onChange(undefined);
            }}
          >
            <><i className="fa-solid fa-xmark cursor-pointer text-secondary-500 " /> </>
          </button>
      )}
      <span className="absolute right-3 top-2 text-secondary-500 cursor-ponter opacity-100 transition-all duration-500 hover:opacity-60">
        <ChevronAnimated up={!open} />
      </span>
      <Menu
        onCancel={() => setOpen(false)}
        open={open}
        options={options}
        onSelect={handleChange}
        searchString={searchString}
        dark={dark}
      />
    </div>
  );
};

export default Select;
