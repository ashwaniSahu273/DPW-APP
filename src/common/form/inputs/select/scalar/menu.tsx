import React, { useEffect, useState } from "react";

import MenuWrapper from "../../../../components/popup-menu";
import MenuItem from "./menu-item";

export default <A,>(props: {
  open: boolean;
  onSelect: (id: A) => void;
  onCancel: () => void;
  options: { id: A; name: string }[];
  // enableSearch?: boolean;
  searchString?: string;
  dark?: boolean;
}) => {

  const { open, onSelect, onCancel, searchString, dark = false } = props;
  const [options, setOptions] = useState<{ id: A; name: string }[]>(
    props.options
  );

  const [filteredOptions, setFilteredOptions] = useState<{ id: A; name: string }[]>(
    options.filter(
      (o) =>
        !searchString ||
        o.name.trim().toLowerCase().includes(searchString.trim().toLowerCase()))
  );


  /*const filteredOptions = options.filter(
    (o) =>
      !searchString ||
      o.name.trim().toLowerCase().includes(searchString.trim().toLowerCase())
  );*/

  useEffect(() => {
    setOptions(props.options);
    setFilteredOptions(
      props.options.filter(
        (o) =>
          !searchString ||
          o.name.trim().toLowerCase().includes(searchString.trim().toLowerCase()))
    )
  }, [props.options]);

  return (
    <MenuWrapper
      open={open}
      onCancel={onCancel}
      position="top-10 left-0"
      dark={dark}
    >
      <>
        {filteredOptions.length === 0 && (
          <li
            className={`flex flex-cols dark:hover:bg-coolGray-500 hover:bg-primary-600 hover:text-white py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`}
          >
            <i>No item found</i>
          </li>
        )}
        {filteredOptions.map((o, i) => (
          <MenuItem
            {...o}
            key={i}
            onSelect={(v) => {
              setOptions(props.options);
              onSelect(v);
            }}
          />
        ))}
      </>
    </MenuWrapper>
  );
};
