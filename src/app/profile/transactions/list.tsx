import React from "react";

import { Transaction } from "interface/transactions/type";

import Button from "common/components/buttons/main";
//import Tooltip from "common/components/tooltip";

export default ({
  data,
}: // onShow
// onEdit,
// onRemove,
{
  data: Transaction[];
  onShow: (v: Partial<Transaction>) => void;
  // onRemove: (id: number) => void;
}) => {
  return (
    <>
      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
        {data
          .sort((a, b) =>
            a.createTimestamp > b.createTimestamp
              ? -1
              : a.createTimestamp < b.createTimestamp
              ? 1
              : 0
          )
          .map((t) => {
            return (
              <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
                <div className="flex">
                  <div className="flex items-center">
                    {/* <button className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
                      <i className="fas fa-arrow-down text-3xs"></i>
                    </button> */}
                    <div className="flex flex-col">
                      <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">
                        {t.txId}
                      </h6>
                      <span className="leading-tight text-xs">
                        {new Date(t.createTimestamp).toDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center ml-auto">
                    <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-sm bg-clip-text">
                      {t.volume}
                    </p>
                  </div>
                </div>
                <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
              </li>
            );
          })}
      </ul>

      {/* <ul>
        {data.length === 0 && (
          <div className="p-3 bg-warning-100 text-warning-800 border-l-4 border-warning-500">
            <i className="fa-solid fa-circle-exclamation text-warning-500 mr-4"></i>{" "}
            You have no transactions yet
          </div>
        )}
        {data
          .sort((a, b) =>
            a.createTimestamp > b.createTimestamp
              ? -1
              : a.createTimestamp < b.createTimestamp
              ? 1
              : 0
          )
          .map((transactionList) => {
            return (
              <li className="border-b p-3" key={transactionList.id}>
                <div className="grid grid-cols-2">
                  <div className="no-wrap i flex">
                    {transactionList.txId &&
                      transactionList.txId !== "undefined" && (
                        <Tooltip label={transactionList.txId}>
                          <i className="fa-solid fa-circle-info text-secondary-400 hover:text-secondary-500 float-left"></i>
                        </Tooltip>
                      )}
                    <span>
                      <small>
                        {!transactionList.txId
                          ? "Got null in Transaction!"
                          : transactionList.txId}
                      </small>
                    </span>
                  </div>

                  <div className="text-right ">
                    <span
                      className={`px-3 py-1 rounded-full mr-4 bg-secondary-100 text-secondary-700  whitespace-nowrap`}
                    >
                      <i
                        className={`fa-solid fa-signal ${
                          transactionList.volume <= 4
                            ? " text-green-700"
                            : transactionList.volume <= 7
                            ? " text-yellow-600"
                            : "text-rose-700"
                        } `}
                      />{" "}
                      <small>volume {transactionList.volume}</small>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul> */}
      <br />
      <Button onClick={() => {}}>
        <>
          <i className="fa-solid fa-plus"></i> Create
        </>
      </Button>
    </>
  );
};
