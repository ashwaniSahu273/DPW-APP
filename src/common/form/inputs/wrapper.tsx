import React from "react";
import { FormType, WrapperProps } from "./type";

export const Wrapper = ({
  label,
  info,
  children,
  errors,
  inputType = FormType.Text,
}: WrapperProps & { inputType?: FormType }) => {
  return (
    <div className={`controls my-3 `}>
      <div className={`${inputType === FormType.Switch && "flex"}`}>
        <label
          className={`control-label dark:text-white font-extralight ${
            inputType === FormType.Switch && "mr-5"
          }`}
        >
          <small>{label}</small>
        </label>
        {children}
      </div>
      <small
        //id="emailHelp"
        className="form-text text-muted"
      >
        {info}
      </small>
      {errors && Array.isArray(errors) && (
        <div className="text-rose-500 font-extralight font-small">
          <ul className="list list-unstyled">
            {errors.map((e, i) => (
              <li key={i}>
                <small>{e}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Wrapper2 = ({
  label,
  children,
}: {
  label?: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className="controls">
    {label && <label className="mr-sm-2">{label}</label>}
    {children}
  </div>
);

export default Wrapper;
