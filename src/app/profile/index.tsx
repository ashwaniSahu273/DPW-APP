import React from "react";

import Detail from "./detail";
import TransactionController from "./transactions/transactions";

export default () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <Detail />
        <TransactionController />
      </div>
    </div>
  );
};
