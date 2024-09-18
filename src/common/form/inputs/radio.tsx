import React from "react";

export default ({
  checked,
  onChange,
  label,
  id,
  disabled = false,
}: {
  id: number | string;
  checked: boolean;
  onChange: (id: number | string) => void;
  label: string;
  disabled?: boolean;
}) => {
  const classes = [
    `w-4 h-4 inline-block mr-2 rounded-full border border-grey flex-no-shrink`,
  ];

  if (checked) {
    classes.push("shadow-md text-primary ring-1 ring-pimary");
    if (disabled) {
      classes.push("bg-coolGray-300");
    } else {
      classes.push("bg-primary");
    }
  }
  return (
    <div className="flex items-center mr-4 mb-4">
      <input
        id={`radio-${id}`}
        type="radio"
        name="radio"
        className="hidden"
        checked={checked}
        onChange={() => onChange(id)}
        disabled={disabled}
      />
      <label
        htmlFor={`radio-${id}`}
        className="flex items-center cursor-pointer font-extralight dark:text-white"
      >
        <span className={classes.join(" ")}></span>
        {label}
      </label>
    </div>
  );
};
