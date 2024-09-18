import React from "react";
import * as T from "../type";

export default ({ value, disabled, onChange }: T.InputProps<boolean>) => {
  const classes = [
    "relative block w-12 h-6 rounded-full bg-white dark:bg-coolGray-500 appearance-none cursor-pointer ",
  ];
  const dotClasses = [
    "absolute cursor-pointer bg-white dark:bg-coolGray-300 rounded-full h-4 w-4 bottom-1 left-1",
  ];
  if (value) {
    // classes.push("right-0  border-primary border-2 ");
    classes.push("bg-primary dark:bg-primary");
    dotClasses.push(
      "transform translate-x-6  transition ease-in-out duration-300"
    );
  } else {
    classes.push("bg-coolGray-300");
    dotClasses.push(
      "translate-x-0 transform transition ease-in-out duration-300"
    );
  }
  return (
    <>
      <div className={classes.join(" ")}>
        <input
          disabled={disabled}
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={typeof value === "undefined" ? false : value}
          onChange={() => onChange(!value)}
          className={classes.join(" ")}
        />
        <label htmlFor="toggle" className={dotClasses.join(" ")}></label>
      </div>
    </>
  );
};
