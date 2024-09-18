import React from "react";

export default (props: {
  up: boolean;
  initAngle?: number;
  endAngle?: number;
}) => {
  const { up, initAngle = 0, endAngle = 180 } = props;

  const rotateFrom =
    initAngle > 0 ? `rotate-${initAngle}` : `-rotate-${initAngle * -1}`;
  const rotateTo =
    endAngle > 0 ? `rotate-${endAngle}` : `-rotate-${endAngle * -1}`;
  return (
    <span>
      <i
        className={`fa-solid fa-chevron-down transition duration-500 ease-in-out transform ${
          up ? rotateTo : rotateFrom
        }`}
      ></i>
    </span>
  );
};
