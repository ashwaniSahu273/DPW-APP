import React, { useState, useEffect } from "react";

import { Transaction } from "interface/transactions/type";

import * as D from "interface/transactions";
import Loader from "common/components/spinner";
import Card from "common/components/card";

import List from "./list";

export default () => {
  const [data, setData] = useState<Transaction[] | null>(null);

  useEffect(() => {
    if (!data) {
      D.getTransactions().then((d) => setData(d.model.transactions));
    }
  }, [data]);

  if (!data) {
    return <Loader />;
  }

  return (
    <Card title="Transactions">
      <List data={data} onShow={() => {}} />
    </Card>
  );
};
