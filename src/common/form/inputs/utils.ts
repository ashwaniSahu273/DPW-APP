export const getClasses = (
  errors?: string[],
  dark: boolean = false
) => `cursor-pointer font-light  border ${dark && "border-secondary-500"}
w-full px-3 py-1 pb-2 pr-2 focus focus:border-primary-500  ${
  dark && "bg-secondary-700 text-white"
}
focus:outline-none active:outline-none active:border-primary
transition ease-in-out duration-200 rounded
${errors && errors.length > 0 ? "border-error" : "border-secondary-200 "}
`;
