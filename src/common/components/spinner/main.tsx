import React from "react";

// w-3 w-4 w-5 w-6 h-3 h-4 h-5 h-6
export default (props: {
  className?: string;
  dotClassName?: string;
  dotSize?: number;
}) => {
  const { className = "m-10", dotClassName = "pr-10", dotSize = 3 } = props;

  const wrapperClasses = `text-center relative ${className}`;
  const dotClasses = `h-${dotSize} w-${dotSize} ${dotClassName}`;
  const animationClasses = `inline-flex absolute h-${dotSize} w-${dotSize} rounded-full bg-primary-700 opacity-75 `;

  return (
    <div className={wrapperClasses}>
      <span className={dotClasses}>
        <span className={`animate-ping100 ${animationClasses}`}></span>
      </span>
      <span className={dotClasses}>
        <span className={`animate-ping200 ${animationClasses}`}></span>
      </span>
      <span className={dotClasses}>
        <span className={`animate-ping300 ${animationClasses}`}></span>
      </span>
    </div>
  );
};
