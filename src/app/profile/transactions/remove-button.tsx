import React from "react";
import myConfirm from "common/components/modal/confirm";

export default ({
  onRemove,
  onCancel,
}: {
  onRemove: () => void;
  onCancel?: () => void;
}) => {
  return (
    <div className="inline">
      <i
        className="fa-solid fa-trash-can text-error-700 cursor-pointer"
        onClick={() => {
          myConfirm({ message: "Are you sure?" }).then(
            () => onRemove(),
            () => onCancel && onCancel()
          );
        }}
      ></i>
    </div>
  );
};
