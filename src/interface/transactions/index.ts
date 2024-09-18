import * as GT from "../type";
import { Transaction } from "./type";
import { apiPrefix } from "config";
import * as Mock from "./mock/transactions";

export const getTransactions = async (): Promise<
  GT.Data<{ transactions: Transaction[] }>
> => {
  return Promise.resolve({
    model: { transactions: Mock.transactionList },
  } as any);
  const res = await fetch(`${apiPrefix}secure/user-transactions`, {
    method: "GET",
  });
  return await res.json();
};
