import React from "react";
import { ButtonProps } from "./type";
import * as Classes from "./classes";
import { ContextColor } from "../type";
import { CircularLoader } from "../spinner";

export default ({
  id,
  children,
  onClick,
  type,
  disabled = false,
  color = ContextColor.primary,
  textColor = ContextColor.white,
  variant = "filled",
  isLoading = false,
}: ButtonProps) => {
  // const {
  //   state: { theme },
  // } = useContext(ContextProvider.Theme.Context.AppContext);

  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    onClick && onClick(id);
  };

  const classArray: string[] = Classes.get(
    { color, textColor, variant },
    disabled,
    isLoading,
    "light"
  );

  return (
    <button
      type={type}
      className={classArray.join(" ")}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="flex flex-inline">
          <CircularLoader /> Loading
        </span>
      ) : (
        children
      )}
    </button>
  );
};
