import { contextBgColors, contextTextColors } from "../type";

import { ButtonStyle } from "./type";

const classTransitions =
  "transition-all duration-500 ease-in-out hover:brightness-50";

// <button type="button" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">Button</button>

export const get = (
  { variant, color, textColor }: ButtonStyle,
  disabled: boolean = false,
  isLoading?: boolean,
  theme: any = "light"
): string[] => {
  const bgColor = contextBgColors[color];
  const textColorClass = contextTextColors[textColor];
  // to remove (will not work with tailwind compilation)
  const shade = 500;

  const classArray: string[] = [
    `inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${
      variant === "filled"
        ? textColorClass //+ ` hover:bg-${color}-600 `
        : contextTextColors[color]
    } border-none`,
    "font-extralight rounded",
  ];

  if (variant === "filled") {
    classArray.push(
      `shadow ${bgColor}-700` //dark:bg-${color}-${shade < 900 ? shade + 100 : shade}`
    );

    if (!disabled && !isLoading) {
      classArray.push(`hover:bg-${color}-600`);
      classArray.push(
        theme === "dark"
          ? "hover:shadow"
          : "shadow-sm focus:shadow-md hover:shadow-lg"
      );
    }
  }

  if (variant === "transparent") {
    classArray.push(
      `hover:font-light hover:text-${color}-${shade + 200} font-normal`
    );
  }

  const classDisabled = "opacity-20 cursor-default";

  if (!disabled && !isLoading) {
    classArray.push(classTransitions);
  }

  if (disabled || isLoading) {
    classArray.push(classDisabled);
  }

  return classArray;
};
