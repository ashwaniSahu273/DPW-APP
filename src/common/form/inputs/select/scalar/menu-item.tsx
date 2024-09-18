import React from "react";

export default <A,>(props: {
  id: A;
  name: string;
  onSelect: (id: A) => void;
  icon?: JSX.Element;
}) => {
  const { id, name, icon, onSelect } = props;

  return (
    <li
      onClick={() => onSelect(id)}
      className={`flex flex-cols 0 hover:bg-primary-700 hover:text-white py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`}
    >
      <span className="text-primary">{icon}</span>
      <span className="mr-3" />
      {name}
    </li>
  );
};
